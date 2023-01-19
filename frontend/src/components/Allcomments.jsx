import React from "react";

const Allcomments = ({ users }) => {
  return (
    <>
      <div className="container">
        {users?.map((val, i) => (
          <div key={i} className="mb-5">
            <div className="flex gap-4">
              <div>
                <img src={val.userimg} alt="" className="h-10 w-10" />
              </div>
              <div className="font-bold my-auto">{val.username}</div>
              <div className="text-[#4B587C] my-auto">・ {val.time}</div>
            </div>
            <div className="ml-10">
              <div className="ml-8">
                <p>{val.comment}</p>
                <div className="flex gap-5 mt-4 text-[#4B587C]">
                  <div>
                    <button name="btnupvote">▲ Upvote</button>
                  </div>
                  <div>{val.votevalue}</div>
                  <div>
                    <button>Reply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Allcomments;
