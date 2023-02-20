import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { useLocation } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const location = useLocation();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  if (error) return <p className="centered">{error}</p>;
  if (!loadedQuote.text) {
    return <p>No quote found. </p>;
  }
  return (
    <div>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {!location.pathname.includes("comments") && (
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            See comments
          </Link>
        </div>
      )}
      <Outlet context={[quoteId]} />
    </div>
  );
};

export default QuoteDetail;
