import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

const Privacy = () => {
  return (
    <div className="flex justify-center py-20">
      <PagePlaceholder
        title={"Политика конфиденциальности"}
        description="Здесь появится юридический раздел с политикой обработки данных и соглашением."
        hint="Подготовим структуру и тексты, когда вы отправите требования."
      />
    </div>
  );
};

export default Privacy;
