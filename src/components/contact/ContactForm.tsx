import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Icon } from "../ui/Icon";
import { messageSubjects } from "../../data/contact.data";
import api from "../../config/axios";
import Endpoints from "../../config/endpoints";

const inputClass =
  "w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100";

interface ContactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  terms: boolean;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await api.post(Endpoints.contact.send, {
        name: `${data.firstName} ${data.lastName ?? ""}`.trim(),
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      });
      toast.success("Xabaringiz yuborildi! Tez orada javob beramiz.");
      reset();
    } catch {
      toast.error("Xatolik yuz berdi. Qayta urinib ko'ring.");
    }
  };
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold">Xabar yuborish</h2>
      <p className="mt-2 text-sm text-gray-500">
        24 soat ichida javob beramiz.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Ism <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Aziz"
              className={inputClass}
              {...register("firstName", { required: "Ism kiritilishi shart" })}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Familiya</label>
            <input
              type="text"
              placeholder="Karimov"
              className={inputClass}
              {...register("lastName")}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="aziz@example.uz"
              className={inputClass}
              {...register("email", {
                required: "Email kiritilishi shart",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email noto'g'ri",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Telefon</label>
            <input
              type="tel"
              placeholder="+998 90 123 45 67"
              className={inputClass}
              {...register("phone")}
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">Mavzu</label>
          <select className={inputClass} {...register("subject")}>
            {messageSubjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Xabar <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            placeholder="Xabaringizni shu yerda yozing..."
            className={`${inputClass} resize-none`}
            {...register("message", { required: "Xabar kiritilishi shart" })}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
          <p className="mt-1.5 text-xs text-gray-400">
            Iltimos, savolingizni iloji boricha aniq yozing.
          </p>
        </div>

        <label className="flex items-center gap-x-2.5 text-sm text-gray-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600"
            {...register("terms", { required: true })}
          />
          Foydalanish shartlari va shaxsiy ma'lumotlarni qayta ishlashga
          roziman.
        </label>
        {errors.terms && (
          <p className="text-xs text-red-500">Shartlarga rozilik bildiring</p>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
          >
            {isSubmitting ? "Yuborilmoqda..." : "Xabarni yuborish"}
            <Icon.send />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
