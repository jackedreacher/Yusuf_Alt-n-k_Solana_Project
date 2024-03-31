import { FC, ReactNode, useState } from "react";
import { Button } from "src/components/Button";
import { useBlog } from "src/context/Blog";

export const PostForm = (props) => {
  const { user,setShowModal } = useBlog();
  const {
    onSubmit,
    postTitle,
    postContent,
    setPostContent,
    setPostTitle,
    formHeader,
    buttonText = "BUY",
  } = props;
  const [loading, setLoading] = useState(false);

  return (
    <div className="rounded-lg py-8 px-6 flex flex-col ">
{formHeader}
<h1
  className="text-3xl font-semibold text-center my-7"
  style={{ color: "white" }}
>
  Release Your Game
</h1>

<div className="flex flex-col gap-4 flex-1">
  <input
    placeholder="Name of the game"
    className="border p-3 rounded-lg"
    id="name"
    maxLength="62"
    minLength="10"
    required
    value={postTitle}
    onChange={(e) => setPostTitle(e.target.value)}
    type="text"
  />
  <textarea
    type="text"
    placeholder="Description of  the game..."
    className="border p-3 rounded-lg"
    id="description"
    required
  />

  <div className=" flex-wrap gap-6">
    <div
      className="text-2x1 font-bold my-7 flex items-center gap-2"
      style={{ color: "white" }}
    >
      <p>Token amount:</p>
      <input
        style={{ color: "black" }}
        placeholder="SOL"
        type="number"
        id="bathrooms"
        min="1"
        max="5"
        required
        className="p-3 border border-gray-300 rounded-lg"
      />
    </div>
    <div
      className="text-2x1 font-bold my-7 flex items-center gap-2"
      style={{ color: "white" }}
    >
      <p>Dollar Amount</p>
      <input
        placeholder="$"
        style={{ color: "black" }}
        type="number"
        id="bathrooms"
        min="1"
        max="60"
        required
        className="p-3 border border-gray-300 rounded-lg"
      />
    </div>
  </div>
</div>
<div className="flex items-center gap-2s">
  <input
    className="p-3 border border-gray-300 rounded w-full "
    type="file"
    id="images"
    accept="image/*"
    multiple
  />
</div>

{/* <input placeholder="Post title" className="flex items-center gap-4" /> */}
{/* <textarea
    value={postContent}
    onChange={(e) => setPostContent(e.target.value)}
    name="content"
    id="content-area"
    rows={3}
    placeholder="Describe your post..."
    className="bg-white rounded-xl px-4 py-2 mt-3 black"
  ></textarea> */}

<Button
  className="mt-3"
  disabled={!user}
  loading={loading}
  onClick={async () => {
    setLoading(true);
    await onSubmit();
    setLoading(false);
  }}
>
  {buttonText}
</Button>
</div>
  );
};
