import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  nereden: yup
    .string()
    .required("Kalkış noktası seçmelisiniz")
    .notOneOf([""], "Kalkış noktası seçmelisiniz"),
  nereye: yup
    .string()
    .required("Varış noktası seçmelisiniz")
    .notOneOf([""], "Varış noktası seçmelisiniz")
    .test("different-cities", "Kalkış ve varış noktaları aynı olamaz", function(value) {
      return this.parent.nereden !== value;
    }),
  tarih: yup
    .string()
    .required("Tarih seçmelisiniz")
    .test("is-future", "Geçmiş tarih seçemezsiniz", function(value) {
      if (!value) return false;
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    })
    .test("is-within-30-days", "En fazla 30 gün sonrası için bilet alabilirsiniz", function(value) {
      if (!value) return false;
      const selectedDate = new Date(value);
      const maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + 30);
      return selectedDate <= maxDate;
    }),
});

const SeferSearch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-2xl p-6 sm:p-8 lg:p-12 my-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
          Sefer Arama
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-white text-sm font-semibold">Nereden</label>
              <select
                {...register("nereden")}
                className={`w-full p-3 rounded-lg border-2 transition-all ${
                  errors.nereden
                    ? "border-red-500 focus:border-red-500"
                    : "border-transparent focus:border-orange-300"
                } focus:ring-2 focus:ring-orange-200 outline-none`}
              >
                <option value="">Şehir seçiniz</option>
                <option value="Ankara">Ankara</option>
                <option value="İstanbul">İstanbul</option>
                <option value="İzmir">İzmir</option>
                <option value="Antalya">Antalya</option>
              </select>
              {errors.nereden && (
                <span className="text-red-100 text-sm bg-red-500/20 px-2 py-1 rounded">
                  {errors.nereden.message}
                </span>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-white text-sm font-semibold">Nereye</label>
              <select
                {...register("nereye")}
                className={`w-full p-3 rounded-lg border-2 transition-all ${
                  errors.nereye
                    ? "border-red-500 focus:border-red-500"
                    : "border-transparent focus:border-orange-300"
                } focus:ring-2 focus:ring-orange-200 outline-none`}
              >
                <option value="">Şehir seçiniz</option>
                <option value="Ankara">Ankara</option>
                <option value="İstanbul">İstanbul</option>
                <option value="İzmir">İzmir</option>
                <option value="Antalya">Antalya</option>
              </select>
              {errors.nereye && (
                <span className="text-red-100 text-sm bg-red-500/20 px-2 py-1 rounded">
                  {errors.nereye.message}
                </span>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-white text-sm font-semibold">Tarih</label>
              <input
                type="date"
                {...register("tarih")}
                className={`w-full p-3 rounded-lg border-2 transition-all ${
                  errors.tarih
                    ? "border-red-500 focus:border-red-500"
                    : "border-transparent focus:border-orange-300"
                } focus:ring-2 focus:ring-orange-200 outline-none`}
              />
              {errors.tarih && (
                <span className="text-red-100 text-sm bg-red-500/20 px-2 py-1 rounded">
                  {errors.tarih.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-white text-orange-500 rounded-lg font-semibold 
                hover:bg-orange-50 active:bg-orange-100 transform transition-all duration-200 
                hover:shadow-lg active:scale-95"
            >
              Sefer Ara
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SeferSearch;