import doc2 from "../assets/img/doc2.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1
          className=" text-4xl font-semibold text-center lg:text-start"
          style={{ direction: "rtl" }}
        >
          🏥 عن عُلا
        </h1>
        <p className=" text-justify lg:text-start" style={{ fontSize: "25px" }}>
          عُلا، الممرضة التي تعمل بكل تفانٍ وحب، هي جزء لا يتجزأ من كل مكان تدخل
          فيه. لا تقتصر مهامها على تقديم الرعاية الصحية فحسب، بل تُضيف لمستها
          الإنسانية لكل مريض تمر بجواره. ابتسامتها تُخفف من الألم، ولمستها
          الرقيقة تمنح الأمل في أوقات الشدة. إن وجودها في هذه المهنة يُعتبر
          أمانًا وراحة لكل من يمر بها، فهي لا تعرف فقط كيف تعالج الجسد، بل أيضًا
          كيف تُطيب الروح. عُلا ليست مجرد ممرضة، هي ملاك يبعث الأمل في القلوب
          ويُعيد الحياة لمن فقد الأمل.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={doc2} alt="img" />
      </div>
    </div>
  );
};

export default About;
