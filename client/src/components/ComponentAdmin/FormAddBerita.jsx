import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { 
  Bold, 
  Italic, 
  Strikethrough, 
  Heading1, 
  Heading2, 
  List, 
  ListOrdered, 
  Link as LinkIcon, 
  Undo, 
  Redo 
} from 'lucide-react';


// Komponen tambah berita
const FormAddBerita = () => {

  // State untuk menyimpan data form
  const [judul, setJudul] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [isi, setIsi] = useState("");
  const [foto, setFoto] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // Fungsi submit form
  const saveBerita = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('judul', judul);
      formData.append('tanggal', tanggal);
      formData.append('isi', isi);
      if (foto) {
        formData.append('foto', foto); // Upload file jika ada
      }
      
      // Kirim data ke backend
      await axios.post(
        "${import.meta.env.VITE_API_URL}/api/v1/berita",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Redirect setelah berhasil kirim data
      navigate("/admin/form-ilkom");
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
      console.error("Error saat mengirim formulir:", error);
    }
  }

  // Handler untuk text editor TipTap
  const handleEditorChange = (html) => {
    setIsi(html);
  };

  // Tampilan form UI
  return (
    <div className="w-full min-h-screen flex flex-col px-10 md:px-8 max-w-none">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-red-950">Form Ilkom News</h2>
        <h3 className="text-md font-medium text-gray-800 mt-2">Add Data Ilkom News</h3>
      </div>
      
      <div className="bg-white rounded-xl shadow-md w-full max-w-full p-10">
        <form className="space-y-5 w-full" onSubmit={saveBerita}>
          <p className=" text-center text-gray-800">{msg}</p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Judul</label>
              <input
                type="text"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Judul Berita"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Tanggal</label>
              <input
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Foto</label>
              <input
                type="file"
                onChange={(e) => setFoto(e.target.files[0])}
                accept="image/*"
                className="block w-full text-gray-500 file:mr-4 file:py-3 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-gray-200 file:text-gray-800 border border-gray-200 rounded-lg"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Isi</label>
              <Tiptap 
                onChange={handleEditorChange}
                content={isi} 
              />
            </div>
          </div>
          
          <div className="flex">
            <button
              type="submit"
              className="px-6 py-3 bg-red-900! hover:bg-red-950! text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Komponen MenuBar
const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  // Fungsi untuk tambah link
  const setLink = () => {
    const url = window.prompt('URL:');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    } else {
      editor.chain().focus().unsetLink().run();
    }
  };

  // Tombol-tombol formatting untuk text editor/MenuBar TipTap (berada di atas form isi)
  return (
    <div className="flex flex-wrap gap-2 mb-2 p-2 border-b border-gray-200">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-200!' : 'bg-gray-200!'} text-gray-800`}
        type="button"
        title="Bold"
      >
        <Bold size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-200!' : 'bg-gray-200!'} text-gray-800`}
        type="button"
        title="Italic"
      >
        <Italic size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2 rounded ${editor.isActive('strike') ? 'bg-gray-200!' : 'bg-gray-200!'} text-gray-800`}
        type="button"
        title="Strikethrough"
      >
        <Strikethrough size={16} />
      </button>
      <button
        onClick={setLink}
        className={`p-2 rounded ${editor.isActive('link') ? 'bg-gray-200!' : 'bg-gray-200!'} text-gray-800`}
        type="button"
        title="Link"
      >
        <LinkIcon size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200!' : 'bg-gray-200!'} text-gray-800`}
        type="button"
        title="Heading 1"
      >
        <Heading1 size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200!' : 'bg-gray-200!'} text-gray-800`}
        type="button"
        title="Heading 2"
      >
        <Heading2 size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-gray-200!' : 'bg-gray-200!'} text-gray-800`}
        type="button"
        title="Bullet List"
      >
        <List size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-gray-200!' : 'bg-gray-200!'} text-gray-800`}
        type="button"
        title="Ordered List"
      >
        <ListOrdered size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        className="p-2 rounded bg-gray-200! text-gray-800"
        type="button"
        title="Undo"
      >
        <Undo size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        className="p-2 rounded bg-gray-200! text-gray-800"
        type="button"
        title="Redo"
      >
        <Redo size={16} />
      </button>
    </div>
  );
};

// Komponen TipTap
const Tiptap = ({ onChange, content }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        linkOnPaste: true,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose p-4 focus:outline-none text-gray-800 prose-ul:list-disc prose-ol:list-decimal',
      },
    },
  });

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <MenuBar editor={editor} />
      <EditorContent 
        editor={editor} 
        className="p-4 min-h-64 max-w-none focus:outline-none text-gray-800"
      />
    </div>
  );
};


export default FormAddBerita;