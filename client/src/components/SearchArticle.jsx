import { useState,useEffect } from "react";
import axios from 'axios';
import { Link } from 'lucide-react';

function SearchArticle() {
    const [searchValue,setSearchValue] = useState("");
    const [articles,setArticles] = useState([]);

    const getArticleData = async(search) => {
        const articleData = await axios.get("http://localhost:4001/trips?keywords="+search);
        setArticles(articleData.data.data);
    }

    useEffect(()=>{getArticleData(searchValue)},[searchValue]);
    
    const handdlingSearch = (event) => {
        setSearchValue(event.target.value);
    }

    const handlingTag = (tag) => {
        const searchKey = searchValue.split(" ").filter(word => word !== "");
        if (!searchKey.includes(tag)) {
            searchKey.push(tag);
            setSearchValue(searchKey.join(" "));
        }
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <header className="py-8 text-center">
                <h1 className="mb-8 text-5xl font-bold text-blue-600">เที่ยวไหนดี</h1>
                
                {/* Search Bar */}
                <div className="mx-auto max-w-2xl px-4">    
                    <form className="mt-2">
                        <div className="mb-2 text-left">
                            <div className="mb-1 text-sm font-medium text-gray-700">ค้นหาที่เที่ยว</div>
                        </div>
                        <input
                            type="search"
                            name="searchValue"
                            placeholder="หาที่เที่ยวแล้วไปกัน ..."
                            value={searchValue}
                            onChange={handdlingSearch}
                            className="w-full border-b-2 border-gray-300 px-1 py-1 text-center text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        />
                    </form>
                </div>
            </header>
            
            {/* Article Cards Section */}
            <section className="mx-auto max-w-6xl px-4 pb-12">
                <div className="space-y-8">
                    {articles.map((item,index)=>(
                        <article key={item.eid} className="overflow-hidden rounded-xl bg-white shadow-lg">
                            <div className="relative flex flex-col lg:flex-row">
                                {/* Left Section - Feature Image */}
                                <div className="lg:w-1/3">
                                    <img 
                                        src={item.photos[0]}
                                        alt={item.title}
                                        className="h-64 w-full object-cover lg:h-full"
                                    />
                                </div>
                                
                                {/* Right Section - Content */}
                                <div className="lg:w-2/3 p-6">
                                    {/* Title */}
                                    <a href={item.url} className="mb-3 text-xl font-bold leading-tight text-gray-800">
                                        {item.title}
                                    </a>
                                    
                                    {/* Description */}
                                    <p className="mb-4 text-gray-600 line-clamp-3">
                                        {item.description.substring(0, 100)}...
                                    </p>
                                    
                                    {/* Read More Link */}
                                    <a href={item.url} className="mb-4 inline-block font-medium text-blue-600 hover:text-blue-800">
                                        อ่านต่อ
                                    </a>
                                    
                                    {/* Category Tags */}
                                    <div className="mb-4">
                                        <span className="mr-2 text-sm text-gray-500">หมวด</span>
                                        {item.tags.map((tag,index)=>(
                                            <button
                                                key={index} 
                                                className="mb-1 mr-1 inline-block px-1 py-0.5 text-sm text-gray-500 underline cursor-pointer"
                                                onClick={()=>handlingTag(tag)}
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                    
                                    {/* Thumbnail Gallery */}
                                    <div className="flex gap-2">
                                        {item.photos.slice(1, 4).map((photo,index)=>(
                                            <img 
                                                key={index}
                                                src={photo}
                                                alt={`${item.title} - ${index + 1}`}
                                                className="h-16 w-16 rounded-lg object-cover"
                                            />
                                        ))}
                                    </div>
                                    
                                    {/* Link Icon */}
                                    <button 
                                        onClick={() =>  navigator.clipboard.writeText(item.url)}
                                        className="absolute bottom-4 right-4"
                                        >
                                        <Link className="cursor-pointer text-blue-600 hover:text-blue-800"/>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default SearchArticle;