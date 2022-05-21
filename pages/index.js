import React from "react";
import Page from "../templates/layouts/Page.js";
import useTranslation from "next-translate/useTranslation";

export default function Index() {
  const { t } = useTranslation(["index"]);

  return (
    <Page title={t("index:metaTitle")}>
      <h1>{t("index:title")}</h1>
    </Page>
  );
}

export async function getServerSideProps(ctx) {
  console.log(ctx.locale);

  return {
    props: {},
  };
}
