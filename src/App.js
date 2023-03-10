import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            {" "}
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to={"quotes"} replace />}></Route>
          <Route path="quotes" element={<AllQuotes />} />
          <Route path="quotes/:quoteId" element={<QuoteDetail />}>
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="new-quote" element={<NewQuote />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
