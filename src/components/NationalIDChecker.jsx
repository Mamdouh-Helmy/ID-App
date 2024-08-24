import { useState } from "react";
import NationalIDInput from "./NationalIDInput";
import UserDetails from "./UserDetails";
import ErrorMessage from "./ErrorMessage";

const NationalIDChecker = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [details, setDetails] = useState(null);

  const processNationalID = (id) => {
    if (id.length !== 14) {
      return { error: "الرقم القومي يجب أن يتكون من 14 رقماً." };
    }

    const yearPrefix = id.charAt(0); 
    const genderDigit = parseInt(id.substring(9, 13));
    const locationCode = id.substring(7, 9); 
    let birthDate = "";
    let location = "";
    let gender = "";

    
    
    if(id.substring(3, 5) <= 12 && id.substring(5, 7) <= 31){
      if (yearPrefix === '2') {
        birthDate = `19${id.substring(1, 3)}-${id.substring(3, 5)}-${id.substring(5, 7)}`;
      } else if (yearPrefix === '3') {
        birthDate = `20${id.substring(1, 3)}-${id.substring(3, 5)}-${id.substring(5, 7)}`;
      } else {
        return { error: "الرقم القومي غير معروف." };
      }
    }else{
      return { error: "الرقم القومي غير معروف." };
    }
    let date = new Date(birthDate)
    const months = [
      "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
      "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];    
    const histroy = ` ${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`

    gender = genderDigit % 2 === 0 ? "أنثى" : "ذكر";

    
    const governorates = {
      '01': "القاهرة",
      '02': "الإسكندرية",
      '03': "بورسعيد",
      '04': "السويس",
      '11': "دمياط",
      '12': "الدقهلية",
      '13': "الشرقية",
      '14': "القليوبية",
      '15': "كفر الشيخ",
      '16': "الغربية",
      '17': "المنوفية",
      '18': "البحيرة",
      '19': "الإسماعيلية",
      '21': "الجيزة",
      '22': "بني سويف",
      '23': "الفيوم",
      '24': "المنيا",
      '25': "أسيوط",
      '26': "سوهاج",
      '27': "قنا",
      '28': "أسوان",
      '29': "الأقصر",
      '31': "البحر الأحمر",
      '32': "الوادى الجديد",
      '33': "مطروح",
      '34': "شمال سيناء",
      '35': "جنوب سيناء",
      '88': "خارج الجمهورية"
    };

    location = governorates[locationCode] || "موقع غير معروف";

    return { histroy, location, gender };
  };

  const handleSubmit = (nationalID) => {
    const result = processNationalID(nationalID);
    if (result.error) {
      setError(result.error);
      setIsSubmitted(false);
      setDetails(null);
    } else {
      setDetails(result);
      setIsSubmitted(true);
      setError("");
    }
  };
  return (
    <div className="boxs">
      <div className="text">
        <h1>ممكن نتعرف!</h1>
        <p>من أي رقم قومي مصري هتقدر تعرف شوية تفاصيل بسيطة</p>
        <NationalIDInput onSubmit={handleSubmit} />
      </div>
      {!isSubmitted && !error && (
          <p>
            من فضلك أدخل الرقم القومي
          </p>
        )}
      {error && <ErrorMessage message={error} />}

      {isSubmitted && details && <UserDetails details={details} />}
    </div>
  );
};

export default NationalIDChecker;
