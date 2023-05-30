import { useTranslation } from "react-i18next";

function Texttest() {
  const { t } = useTranslation();
  return (
    <p>{t('text')}</p>
  )
}

export default Texttest;