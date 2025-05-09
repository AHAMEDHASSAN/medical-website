import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import BlogCard from "../Layouts/BlogCard";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center justify-between">
        <div>
          <h1
            style={{ color: "#ff69b4	" }}
            className="text-4xl font-semibold text-center lg:text-center"
          >
            آخر التحديثات عن الممرضة عُلا
          </h1>
          <p
            className="mt-2 text-center lg:text-right"
            style={{ color: "rgb(54, 174, 154)" }}
          >
            عُلا دائمًا ما تبذل جهدها لتقديم أفضل رعاية صحية للمرضى، وفي هذه
            المنشورات نشارك معكم آخر مستجدات عملها والتحديثات المتعلقة بخدماتها
            الطبية. تابعونا للحصول على نصائح صحية ورعاية متميزة.
          </p>
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} title="التحديث الأول" />
          <BlogCard img={img2} title="التحديث الثاني" />
          <BlogCard img={img3} title="التحديث الثالث" />
          <BlogCard img={img4} title="التحديث الرابع" />
          <BlogCard img={img5} title="التحديث الخامس" />
          <BlogCard img={img6} title="التحديث السادس" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
