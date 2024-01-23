import htmlImg from '../assets/images/illustration-article.svg';
import avatar from '../assets/images/image-avatar.webp';
const Card = () => {
  return (
    <div className="max-w-xs p-5 m-5 bg-white rounded-2xl border-black border shadow-[5px_5px_0px_0_rgb(0,0,0)] group hover:shadow-[10px_10px_0px_0_rgb(0,0,0)]">
      <div className="rounded-lg overflow-hidden mb-6">
        <img className="w-full" src={htmlImg} alt="Learning HTML & CSS" />
      </div>
      <div>
        <button className="bg-yellow text-black font-extrabold text-xs py-1 px-3 rounded-md">
          Learning
        </button>
        <p className="text-xs my-3 font-semibold">Published 21 Dec 2023</p>
        <h3 className="text-lg tracking-wider text-black cursor-pointer group-hover:text-yellow font-extrabold">
          HTML & CSS foundations
        </h3>
        <p className="text-[13px] leading-4 my-3 text-gray">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex gap-2 mt-4 items-center">
          <img className="w-6 h-6" src={avatar} alt="avatar" />
          <h4 className="text-xs text-black font-extrabold">Greg Hooper</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
