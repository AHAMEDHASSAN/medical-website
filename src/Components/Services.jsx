import { RiMicroscopeLine } from "react-icons/ri";

import { FaHeartbeat } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 bg-gray-100">
      <div className="flex flex-col items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-center text-blue-600">
            خدمات عُلا
          </h1>
          <p className="mt-2 text-center lg:text-center text-gray-700">
            عُلا لا تقدم فقط الرعاية الصحية، بل تقدم أيضًا اهتمامًا وحنانًا لكل
            مريض. خدماتها تشمل:
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 pt-14">
        {/* خدمة الفحوصات الطبية */}
        <div className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center w-full lg:w-1/3 border-t-4 border-blue-500 hover:shadow-xl">
          <div className="text-blue-500 text-5xl mb-6">
            {/* أيقونة الفحص المختبري */}
            <i className="fas fa-flask"></i>
          </div>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            فحص مختبري
          </h3>
          <p className="text-gray-600 text-center">
            نقوم بتقديم فحوصات طبية شاملة تضمن لك التقييم الصحيح لحالتك الصحية.
          </p>
        </div>

        {/* خدمة الفحص الصحي العام */}
        <div className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center w-full lg:w-1/3 border-t-4 border-green-500 hover:shadow-xl">
          <div className="text-green-500 text-5xl mb-6">
            {/* أيقونة الفحص الصحي */}
            <i className="fas fa-stethoscope"></i>
          </div>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            فحص صحي شامل
          </h3>
          <p className="text-gray-600 text-center">
            فحص شامل يتضمن جميع المؤشرات الصحية المهمة للتأكد من سلامتك.
          </p>
        </div>

        {/* خدمة صحة القلب */}
        <div className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center w-full lg:w-1/3 border-t-4 border-red-500 hover:shadow-xl">
          <div className="text-red-500 text-5xl mb-6">
            {/* أيقونة صحة القلب */}
            <i className="fas fa-heartbeat"></i>
          </div>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            صحة القلب
          </h3>
          <p className="text-gray-600 text-center">
            نقدم فحوصات خاصة لصحة القلب تساعد في الكشف المبكر عن أي مشاكل.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
