import { NextPage } from "next";
import Link from "next/link";
import PageLayout from "../layouts/page-layout";
import Title from "../components/shared/titles/title";

const NotFoundPage: NextPage = () => {
  const headContext = {
    title: "404 Not Found",
    meta: [],
  };

  return (
    <PageLayout headContext={headContext}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <Title $align="center">404: Not Found</Title>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Go back to Home</Link>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
