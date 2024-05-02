// frontend/src/components/ArticleProposal.js
import React from 'react';

const ArticleProposal = ({ articleIdea }) => {
  return (
    <div className="article-proposal">
      <h3>Article Idea</h3>
      <p>{articleIdea}</p>
      <div className="actions">
        <button className="approve-btn">Approve</button>
        <button className="edit-btn">Edit</button>
        <button className="reject-btn">Reject</button>
      </div>
    </div>
  );
};

export default ArticleProposal;
