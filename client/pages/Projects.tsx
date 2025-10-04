import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

const Projects = () => {
  return (
    <div className="flex justify-center py-20">
      <PagePlaceholder
        title={"Страница проектов в разработке"}
        description="Добавим фильтры, карточки и переходы к подробному описанию кейсов, включая галерею."
        hint="Готовы перейти к реализации списка проектов по вашей спецификации."
      />
    </div>
  );
};

export default Projects;
