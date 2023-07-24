import { NextPageContext, NextComponentType } from "next";
import Title from "../components/shared/titles/title";
import PageLayout from "../layouts/page-layout";

const headContext = {
  title: "Error page!",
  meta: [],
};

interface ErrorProps {
  statusCode: number | null;
}

const Error: NextComponentType<NextPageContext, ErrorProps, ErrorProps> = ({
  statusCode,
}) => {
  return (
    <PageLayout headContext={headContext}>
      <Title $align="center" $mt={16}>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </Title>
    </PageLayout>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode: statusCode ?? null };
};

export default Error;
