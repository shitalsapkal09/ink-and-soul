import "./Writing.css";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase";

import marathiPoems from "../data/marathiPoems";
import hindiPoems from "../data/hindiPoems";
import englishPoems from "../data/englishPoems";
import stories from "../data/stories";
import quotesShayari from "../data/quotesShayari";

function Writing() {
  const { language, id } = useParams();

  // =========================================
  // SELECT WRITING COLLECTION
  // =========================================

  let writings = [];
  let backPath = "/poetry";

  if (language === "marathi") {
    writings = marathiPoems;
    backPath = "/poetry/marathi";
  } else if (language === "hindi") {
    writings = hindiPoems;
    backPath = "/poetry/hindi";
  } else if (language === "english") {
    writings = englishPoems;
    backPath = "/poetry/english";
  } else if (language === "story") {
    writings = stories;
    backPath = "/stories";
  } else if (language === "quote") {
    writings = quotesShayari;
    backPath = "/quotes";
  }

  // =========================================
  // FIND CURRENT WRITING
  // =========================================

  const writing = id
    ? writings.find(
        (item) => String(item.id) === String(id)
      )
    : null;

  const writingId = `${language || "quote"}-${id || "collection"}`;

  // =========================================
  // STATES
  // =========================================

  const [reaction, setReaction] = useState(null);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const [shared, setShared] = useState(false);

  const [comments, setComments] = useState([]);

  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");

  // =========================================
  // CREATE UNIQUE READER ID
  // =========================================

  const [readerId] = useState(() => {
    let savedId = localStorage.getItem(
      "inkSoulReaderId"
    );

    if (!savedId) {
      savedId =
        "reader-" +
        Date.now() +
        "-" +
        Math.random()
          .toString(36)
          .substring(2);

      localStorage.setItem(
        "inkSoulReaderId",
        savedId
      );
    }

    return savedId;
  });

  // =========================================
  // LOAD SAVED REACTION
  // =========================================

  useEffect(() => {
    if (!id) return;

    const savedReaction =
      localStorage.getItem(
        `reaction-${writingId}-${readerId}`
      );

    setReaction(savedReaction || null);
  }, [writingId, readerId, id]);

  // =========================================
  // LOAD LIKE / DISLIKE COUNTS
  // =========================================

  useEffect(() => {
    if (!id) return;

    const writingRef = doc(
      db,
      "writings",
      writingId
    );

    const unsubscribe = onSnapshot(
      writingRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();

          setLikes(data.likes || 0);
          setDislikes(data.dislikes || 0);
        } else {
          setLikes(0);
          setDislikes(0);
        }
      },
      (error) => {
        console.error(
          "Error loading reactions:",
          error
        );
      }
    );

    return () => unsubscribe();
  }, [writingId, id]);

  // =========================================
  // LOAD COMMENTS
  // =========================================

  useEffect(() => {
    if (!id) return;

    const commentsRef = collection(
      db,
      "writings",
      writingId,
      "comments"
    );

    const commentsQuery = query(
      commentsRef,
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      commentsQuery,
      (snapshot) => {
        const loadedComments =
          snapshot.docs.map(
            (commentDoc) => ({
              id: commentDoc.id,
              ...commentDoc.data(),
            })
          );

        setComments(loadedComments);
      },
      (error) => {
        console.error(
          "Error loading comments:",
          error
        );
      }
    );

    return () => unsubscribe();
  }, [writingId, id]);

  // =========================================
  // LIKE
  // =========================================

  async function handleLike() {
    if (!writing) return;

    try {
      const writingRef = doc(
        db,
        "writings",
        writingId
      );

      const oldReaction = reaction;

      if (oldReaction === "like") {
        const snapshot =
          await getDoc(writingRef);

        if (snapshot.exists()) {
          const currentLikes =
            snapshot.data().likes || 0;

          if (currentLikes > 0) {
            await updateDoc(
              writingRef,
              {
                likes: increment(-1),
              }
            );
          }
        }

        setReaction(null);

        localStorage.removeItem(
          `reaction-${writingId}-${readerId}`
        );

        return;
      }

      const snapshot =
        await getDoc(writingRef);

      if (!snapshot.exists()) {
        await setDoc(writingRef, {
          likes: 1,
          dislikes: 0,
        });
      } else {
        const updates = {
          likes: increment(1),
        };

        if (oldReaction === "dislike") {
          updates.dislikes =
            increment(-1);
        }

        await updateDoc(
          writingRef,
          updates
        );
      }

      setReaction("like");

      localStorage.setItem(
        `reaction-${writingId}-${readerId}`,
        "like"
      );
    } catch (error) {
      console.error(
        "Error with Like:",
        error
      );

      alert(
        "Unable to save your like. Please try again."
      );
    }
  }

  // =========================================
  // DISLIKE
  // =========================================

  async function handleDislike() {
    if (!writing) return;

    try {
      const writingRef = doc(
        db,
        "writings",
        writingId
      );

      const oldReaction = reaction;

      if (oldReaction === "dislike") {
        const snapshot =
          await getDoc(writingRef);

        if (snapshot.exists()) {
          const currentDislikes =
            snapshot.data().dislikes || 0;

          if (currentDislikes > 0) {
            await updateDoc(
              writingRef,
              {
                dislikes: increment(-1),
              }
            );
          }
        }

        setReaction(null);

        localStorage.removeItem(
          `reaction-${writingId}-${readerId}`
        );

        return;
      }

      const snapshot =
        await getDoc(writingRef);

      if (!snapshot.exists()) {
        await setDoc(writingRef, {
          likes: 0,
          dislikes: 1,
        });
      } else {
        const updates = {
          dislikes: increment(1),
        };

        if (oldReaction === "like") {
          updates.likes =
            increment(-1);
        }

        await updateDoc(
          writingRef,
          updates
        );
      }

      setReaction("dislike");

      localStorage.setItem(
        `reaction-${writingId}-${readerId}`,
        "dislike"
      );
    } catch (error) {
      console.error(
        "Error with Dislike:",
        error
      );

      alert(
        "Unable to save your dislike. Please try again."
      );
    }
  }

  // =========================================
  // ADD COMMENT
  // =========================================

  async function handleComment() {
    const name = commentName.trim();
    const text = commentText.trim();

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!text) {
      return;
    }

    try {
      const commentsRef = collection(
        db,
        "writings",
        writingId,
        "comments"
      );

      await addDoc(commentsRef, {
        author: name,
        text: text,
        readerId: readerId,
        createdAt: serverTimestamp(),
      });

      setCommentName("");
      setCommentText("");
    } catch (error) {
      console.error(
        "Error adding comment:",
        error
      );

      alert(
        "Unable to post comment. Please try again."
      );
    }
  }

  // =========================================
  // ENTER TO COMMENT
  // =========================================

  function handleCommentKeyDown(event) {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      handleComment();
    }
  }

  // =========================================
  // DELETE OWN COMMENT
  // =========================================

  async function handleDeleteComment(
    commentId,
    commentReaderId
  ) {
    if (commentReaderId !== readerId) {
      return;
    }

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this comment?"
      );

    if (!confirmDelete) {
      return;
    }

    try {
      const commentRef = doc(
        db,
        "writings",
        writingId,
        "comments",
        commentId
      );

      await deleteDoc(commentRef);
    } catch (error) {
      console.error(
        "Error deleting comment:",
        error
      );

      alert(
        "Unable to delete comment."
      );
    }
  }

  // =========================================
  // SHARE
  // =========================================

  async function handleShare() {
    if (!writing) {
      return;
    }

    const shareData = {
      title: writing.title,
      text: `Read "${writing.title}" on Ink & Soul`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(
          shareData
        );
      } else {
        await navigator.clipboard.writeText(
          window.location.href
        );
      }

      setShared(true);

      setTimeout(() => {
        setShared(false);
      }, 2000);
    } catch (error) {
      console.log(
        "Share cancelled or unavailable."
      );
    }
  }

  // =========================================
  // WRITING NOT FOUND
  // =========================================

  if (!writing) {
    return (
      <div className="writing-page">

        <Link
          to={backPath}
          className="writing-back top-back"
        >
          ← Back to Collection
        </Link>

        <h1>Writing Not Found</h1>

      </div>
    );
  }

  // =========================================
  // PAGE
  // =========================================

  return (
    <div className="writing-page">

      {/* BACK BUTTON */}

      <Link
        to={backPath}
        className="writing-back top-back"
      >
        ← Back to Collection
      </Link>

      {/* TITLE */}

      <h1>{writing.title}</h1>

      {/* AUTHOR */}

      <p className="writing-author">
        __Shital🌷
      </p>

      {/* CONTENT */}

      <div className="writing-content">
        {writing.content
          .split("\n")
          .map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
      </div>

      {/* ACTIONS */}

      <div className="writing-actions">

        <button
          type="button"
          className={`action-button ${
            reaction === "like"
              ? "active"
              : ""
          }`}
          onClick={handleLike}
        >
          {reaction === "like"
            ? "❤️ Like"
            : "♡ Like"}{" "}
          {likes}
        </button>

        <button
          type="button"
          className={`action-button ${
            reaction === "dislike"
              ? "active"
              : ""
          }`}
          onClick={handleDislike}
        >
          {reaction === "dislike"
            ? "👎 Dislike"
            : "♧ Dislike"}{" "}
          {dislikes}
        </button>

        <button
          type="button"
          className={`action-button ${
            shared ? "active" : ""
          }`}
          onClick={handleShare}
        >
          {shared
            ? "✓ Shared"
            : "♧ Share"}
        </button>

      </div>

      {/* COMMENTS */}

      <div className="comments-section">

        <h2>💬 Comments</h2>

        {/* COMMENT FORM */}

        <div className="comment-box">

          <input
            type="text"
            value={commentName}
            onChange={(event) =>
              setCommentName(
                event.target.value
              )
            }
            placeholder="Your name"
            className="comment-name-input"
          />

          <textarea
            value={commentText}
            onChange={(event) =>
              setCommentText(
                event.target.value
              )
            }
            onKeyDown={
              handleCommentKeyDown
            }
            placeholder="Write your comment..."
            rows="4"
          />

          <button
            type="button"
            onClick={handleComment}
            className="comment-button"
            disabled={
              !commentName.trim() ||
              !commentText.trim()
            }
          >
            Comment
          </button>

        </div>

        {/* COMMENTS LIST */}

        <div className="comments-list">

          {comments.length === 0 ? (
            <p className="no-comments">
              No comments yet. Be the first
              to share your thoughts.
            </p>
          ) : (
            comments.map((comment) => (
              <div
                className="comment"
                key={comment.id}
              >

                <div className="comment-body">

                  <div className="comment-header">

                    <strong>
                      {comment.author ||
                        "Reader"}
                    </strong>

                    {comment.createdAt &&
                      typeof comment.createdAt.toDate ===
                        "function" && (
                        <span className="comment-time">
                          {" "}
                          •{" "}
                          {comment.createdAt
                            .toDate()
                            .toLocaleString()}
                        </span>
                      )}

                  </div>

                  <p>
                    {comment.text}
                  </p>

                  {comment.readerId ===
                    readerId && (
                    <button
                      type="button"
                      className="delete-comment-button"
                      onClick={() =>
                        handleDeleteComment(
                          comment.id,
                          comment.readerId
                        )
                      }
                    >
                      🗑 Delete
                    </button>
                  )}

                </div>

              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default Writing;