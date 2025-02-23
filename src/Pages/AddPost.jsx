import { useState } from "react";
import { toast } from "react-toastify";

const AddPost = () => {
    const [formData, setFormData] = useState({
        authorImage: null,
        authorName: "",
        authorEmail: "",
        postTitle: "",
        tag: "",
        postDescription: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, authorImage: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Form submitted successfully!");
        console.log(formData);
    };

    return (
        <div className="max-w-lg mx-auto p-3 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Add New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Author Image</label>
                        <input type="file" onChange={handleFileChange} className="mt-1 p-2 w-full border rounded" />
                    </div>
                    <div>
                        <label className="block font-medium">Author Name</label>
                        <input type="text" name="authorName" value={formData.authorName} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />
                    </div>
                    <div>
                        <label className="block font-medium">Author Email</label>
                        <input type="email" name="authorEmail" value={formData.authorEmail} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />
                    </div>
                    <div>
                        <label className="block font-medium">Post Title</label>
                        <input type="text" name="postTitle" value={formData.postTitle} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />
                    </div>
                </div>
                <div>
                    <label className="block font-medium">Tag</label>
                    <input type="text" name="tag" value={formData.tag} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />
                </div>
                <div>
                    <label className="block font-medium">Post Description</label>
                    <textarea name="postDescription" value={formData.postDescription} onChange={handleChange} className="mt-1 p-2 w-full border rounded"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddPost;
