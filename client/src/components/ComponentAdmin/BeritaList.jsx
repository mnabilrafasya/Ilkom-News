import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Beritalist = () => {
  const [berita, setBerita] = useState([]);

  // useEffect untuk memanggil getBerita saat komponen pertama kali dimuat
  useEffect(()=>{
    getBerita();
  }, []);

   // Fungsi untuk ambil data berita dari API
  const getBerita = async () =>{
    const response = await axios.get("http://localhost:5000/api/v1/berita");
    setBerita(response.data);
  };

   // Fungsi untuk menghapus berita berdasarkan beritaId
  const deleteBerita = async (beritaId) => {
    await axios.delete(`http://localhost:5000/api/v1/berita/${beritaId}`);
    getBerita();
  };

  return (
    <div>
        <h2 className="title text-red-950 font-medium text-4xl">Data Ilkom News</h2>
        <div className="mt-10">
            <Link 
                to="/admin/form-ilkom/add"
                className="px-4 py-3 bg-red-900! hover:bg-red-950! text-white! font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
                Add Berita
            </Link>
        </div>
        <div className="overflow-x-auto w-full rounded-lg mt-8 border border-gray-200">
            <table className="min-w-full bg-white rounded-md">
                <thead className="bg-gray-50 text-gray-800 font-normal">
                    <tr>
                        <th className="w-16 p-4 text-left font-medium">No</th>
                        <th className="w-1/4 p-4 text-left font-medium">Title</th>
                        <th className="w-1/6 p-4 text-left font-medium">Date</th>
                        <th className="w-1/3 p-4 text-left font-medium">Content</th>
                        <th className="w-24 p-4 text-left font-medium">Image</th>
                        <th className="w-28 p-4 text-left font-medium">Action</th>
                    </tr>
                </thead>
            <tbody className="divide-y divide-gray-200">
                {berita.map((berita, index)=>(
                <tr key={berita.uuid}>
                    <td className="p-4 text-gray-800 text-left">{index + 1}</td>
                    <td className="p-4 text-gray-800 text-left">{berita.judul}</td>
                    <td className="p-4 text-gray-800 text-left">
                        {(() => {
                            const date = new Date(berita.tanggal);
                            return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
                        })()}
                    </td>
                    <td className="p-4 text-gray-800">
                        <div 
                            className="max-w-xs overflow-hidden [&>p]:inline [&>p]:m-0 [&>p]:p-0"
                            dangerouslySetInnerHTML={{ __html: berita.isi }}
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}
                        />
                    </td>
                    <td className="p-4 text-gray-800">
                        {berita.foto ? (
                            <div className="flex items-center">
                                <img 
                                    src={`http://localhost:5000/uploads/${berita.foto}`} 
                                    // alt={berita.judul}
                                    className="w-5 h-5 object-cover rounded-md mr-2" 
                                />
                                <span className="text-gray-800">
                                    {berita.foto.includes('/') 
                                    ? berita.foto.split('/').pop() 
                                    : berita.foto}
                                </span>
                            </div>
                        ) : (
                            <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center">
                                <span className="text-gray-400 text-xs">No Image</span>
                            </div>
                        )}
                    </td>
                    <td className="p-4 text-gray-800 text-center">
                        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 justify-center">
                            <Link 
                                to={`/admin/form-ilkom/edit/${berita.uuid}`} 
                                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white! font-medium rounded-lg transition-colors duration-200"
                            >
                                Edit
                            </Link>
                            <button 
                                onClick={()=> deleteBerita(berita.uuid)}
                                className="px-3 py-2 bg-red-900! hover:bg-red-950! text-white font-medium rounded-lg transition-colors duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>
  );
};

export default Beritalist;