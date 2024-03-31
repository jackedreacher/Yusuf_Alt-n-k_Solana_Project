<div className="rounded-lg py-8 px-6 flex flex-col ">
      {formHeader}
      <h1
        className="text-3xl font-semibold text-center my-7"
        style={{ color: "white" }}
      >
        Payment
      </h1>

      <div className="flex flex-col gap-4 flex-1">
        

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
              max="10"
              required
              className="p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <di className="text-2x1  my-7 flex items-center gap-2"
            style={{ color: "white" }}>
              <p>Everything after 1 token goes  to developers. </p>
            </di>
         
        </div>
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
        onClick={async () => {  setShowModal(false)
          
        }}
      >
        {buttonText}
      </Button>
    </div>