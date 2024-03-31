import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";
import { useEffect, useState } from "react";
import { Button } from "src/components/Button";
import { PostForm } from "src/components/PostForm";
import { useBlog } from "src/context/Blog";
import { useHistory } from "react-router-dom";
//import {SolanaTransfer} from './SolanaTransfer';



export const Dashboard = () => {
  const history = useHistory();
  const [connecting, setConnecting] = useState(false);
  const { connected, select } = useWallet();
  const {
    user,
    posts,
    initialized,
    initUser,
    createPost,
    showModal,
    setShowModal,
  } = useBlog();
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const onConnect = () => {
    setConnecting(true);
    select(PhantomWalletName);
  };

  useEffect(() => {
    if (user) {
      setConnecting(false);
    }
  }, [user]);

  return (
    <div className="background-black overflow-auto h-screen">
      <header className="fixed z-10 w-full h-14  shadow-md" style={{ position: 'fixed', top: '0', width: '100%',backgroundColor: '#f0f0f0'}}>
        <div className="flex justify-between items-center h-full container ">
          <h2 className="font-bold text-sm sm:text-xl flex flex-wrap p-15">
            
            <div className=" font-bold text-slate-500ml-2 capitalize  p-2  text-slate-500 " style={{color:"#274373"  }} >
              OURGAMES
            </div>
            <div className=" font-bold text-slate-500ml-2 capitalize  p-2  text-slate-500 " style={{color:"black"}} >
              Powered by
            </div>
            <img
                src={"https://res.coinpaper.com/coinpaper/solana_sol_logo_32f9962968.png"}
                alt="avatar"
                className="w-10 h-10  "
                style={{marginLeft: 5}}
              />
            
            
          </h2>
          {connected ? (
            <div className="flex items-center p-3">
              <p className=" font-bold text-sm ml-2 capitalize underlinepink p-3">
                STORE
              </p>
              <p className=" font-bold text-sm ml-2 capitalize mr-4 underlinepink p-3">
                GAMEPASS
              </p>
              
              
              <img
                src={user?.avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full bg-gray-200 shadow ring-2 ring-indigo-400 ring-offset-2 ring-opacity-50"
                />
              <p className=" font-bold text-sm ml-2 capitalize">{user?.name}</p>
                {initialized ? (
                  <Button
                    className="ml-3 mr-2"
                    style= {{ backgroundColor: "black"}}
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    Puslish as Developer
                  </Button>
                ) : (
                  <Button
                    className="ml-3 mr-2"
                    onClick={() => {
                      initUser();
                    }}
                  >
                    Initialize as Publisher
                  </Button>
                )}
              {initialized ? (
                <Button
                  className="ml-3 mr-2"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Wallet Connected
                </Button>
              ) : (
                <Button
                  className="ml-3 mr-2"
                  onClick={() => {
                    initUser();
                  }}
                >
                  Initialize as User
                </Button>
              )}




            </div>
          ) : (
            <Button
              loading={connecting}
              className="w-28"
              onClick={onConnect}
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
            >
              Connect
            </Button>
          )}
        </div>
      </header>
      <main className="dashboard-main pb-4 container flex relative ">
        <div className="pt-10">
          {/* <h1 className="title">The Blog</h1> */}
          <div className="row">
            <article className="best-post">
              <div
                className="best-post-image w-200 h-70  "
                style={{ // değişmeyecek 2024 vıdeo games
                  backgroundImage: `url("https://ardent-collective.com/storage/2023/12/2024-Gamest-jpg.webp")`,
                  

                }}
              ></div>
              <div className="best-post-content">
                <div className="best-post-content-cat">
                  March 29, 2024<span className="dot"> </span>Announcement
                </div>
                <div className="best-post-content-title" style={{color:"black"}}>FUTURE OF  GAMES IS HERE!</div>
                <div className="best-post-content-sub">
                  We present a revolutionary platform that combines the game
                  rental system offered by platforms like Steam with blockchain
                  technology and the SOL token. We offer players the opportunity
                  to rent games and earn SOL tokens per hour played, while also
                  being able to use their accumulated SOL tokens to get a free
                  monthly subscription.
                </div>
                
                
              </div>
            </article>
            <div className="best-post-content-title2 ">
            GAMEPASS GAMES
                </div>
             <div className="flex ">

                {/* 1. */}

            <div className="all__posts flex justify-between items-center max-w-6xl mx-auto p-3  ">
              {posts.map((item) => {
                return (
                  <article
                    className="post__card-2 "
                    
                    key={item.account.id}
                  >
                    <div className="post__card_-2 ">
                      <div
                        className="post__card__image-2"
                        style={{ // post ön yüz ilk değişmesi gereken
                          backgroundImage: `url("https://cdn.webtekno.com/media/cache/content_detail_v2/article/100938/assassin-s-creed-valhalla-daki-dovus-mekaniklerini-gosteren-yeni-bir-video-paylasildi-1603130793.jpg")`,
                        }}
                      ></div>
                      <div>
                        <div className="post__card_meta-2  gap-4 p-3">
                          <div className="post__card_cat flex">
                          Assassin's Creed® Valhalla:<span className="dot"> </span>
                           
                            <Button className="  p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70 " style={{ display: 'inline-block', marginRight: '10px',backgroundColor: "black" }} onClick={() => {}}>
                      $29
                    </Button>
                    <div className="post__card_meta-2m p-4" style={{ display: 'inline-block', marginRight: '10px' }} >Or</div>
                    <Button className="p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70" onClick={() => {setShowModal(true);}}>
                    buy with token
                    </Button>
                          </div>
                          <p className="post__card_alttitle-2">
                            {item.account.content}
                          </p>
                          
                        </div>
                        
                      </div>
                     
                    </div>
                   
                  </article>
                );
              })}
            </div>


              {/* 2. */}

            {/* <div className="all__posts flex justify-between items-center max-w-6xl mx-auto p-3  ">
              {posts.map((item) => {
                return (
                  <article
                    className="post__card-2 "
                    //onClick={() => {
                     // history.push(`/read-post/${item.publicKey.toString()}`);
                    //}}
                    key={item.account.id}
                  >
                    <div className="post__card_-2 ">
                      <div
                        className="post__card__image-2"
                        style={{ // post ön yüz ilk değişmesi gereken
                          backgroundImage: `url("https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S1_2560x1440-a0518b9f9f36a05294e37448df8a27a0")`,
                        }}
                      ></div>
                      <div>
                        <div className="post__card_meta-2  gap-4 p-3">
                          <div className="post__card_cat flex">
                          Marvel's Spider-Man: Miles Morales: <span className="dot"> </span>
                           
                            <Button className="  p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70 " style={{ display: 'inline-block', marginRight: '10px',backgroundColor: "black" }} onClick={() => {}}>
                      $59
                    </Button>
                    <div className="post__card_meta-2m p-4" style={{ display: 'inline-block', marginRight: '10px' }} >Or</div>
                    <Button className="p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70" onClick={() => {setShowModal(true);}}>
                    buy with token
                    </Button>
                          </div>
                          <p className="post__card_alttitle-2">
                            {item.account.content}
                          </p>
                          
                        </div>
                        
                      </div>
                     
                    </div>
                   
                  </article>
                );
              })}
            </div> */}


            {/* 3. */}

{/* 
            <div className="all__posts flex justify-between items-center max-w-6xl mx-auto   ">
              {posts.map((item) => {
                return (
                  <article
                    className="post__card-2 "
                    
                    key={item.account.id}
                  >
                    <div className="post__card_-2 ">
                      <div
                        className="post__card__image-2"
                        style={{ // post ön yüz ilk değişmesi gereken
                          backgroundImage: `url("https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg")`,
                        }}
                      ></div>
                      <div>
                        <div className="post__card_meta-2  gap-4 p-3">
                          <div className="post__card_cat flex">
                          Red Dead Redemption 2:<span className="dot"> </span>
                           
                            <Button className="  p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70 " style={{ display: 'inline-block', marginRight: '10px',backgroundColor: "black" }} onClick={() => {}}>
                      $18
                    </Button>
                    <div className="post__card_meta-2m p-4" style={{ display: 'inline-block', marginRight: '10px' }} >Or</div>
                    <Button className="p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70" onClick={() => {setShowModal(true);}}>
                    buy with  token
                    </Button>
                          </div>
                          <p className="post__card_alttitle-2">
                            {item.account.content}
                          </p>
                          
                        </div>
                        
                      </div>
                     
                    </div>
                   
                  </article>
                );
              })}
            </div> */}
            </div>
          </div>
        </div>
        <div className={`modal ${showModal && "show-modal"}`}>
          <div className="modal-content">
            <span className="close-button" onClick={() => setShowModal(false)}>
              ×
            </span>
            <PostForm
              postTitle={postTitle}
              postContent={postContent}
              setPostTitle={setPostTitle}
              setPostContent={setPostContent}
              onSubmit={() => createPost(postTitle, postContent)}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
