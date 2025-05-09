const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          إلى الممرضة الرائعة{" "}
          <span style={{ color: "red", borderRadius: "50px", padding: "10px" }}>
            عُلا
          </span>
          ، شكرًا لابتسامتك الدافئة وجهودك النبيلة في رعاية المرضى. وجودك يصنع
          فرقًا حقيقيًا ويمنح الأمل في كل لحظة. 🌸
        </h1>
        <p>
          هو: مش كل يوم تقابل ملاك لابس أبيض... نفسه: بس لما شفت عُلا، فهمت إن
          الرحمة ليها وجه... وصوت. هو: مش بس بتداوي المرضى، دا بتطبطب على
          القلوب. نفسه: وأنا واحد منهم.
        </p>
      </div>
    </div>
  );
};

export default Home;
