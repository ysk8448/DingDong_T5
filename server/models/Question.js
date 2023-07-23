const mongoose = require('mongoose');

// id, 제목, 내용, 투표수, 답변수, 조회수, 작성자, 해시태그
const QuestionSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    votes: {
      type: Number,
      default: 0,
    },
    answers: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    // Login 구현 후 수정 예정 : 작성자는 User의 id를 참조
    // userId: {
    //   type: Number,
    //   required: true,
    // },
    author: {
      type: String,
      required: true,
    },
    hashtags: {
      type: Array,
      required: false,
    },
  },
  // 생성일(createdAt)과 수정일(updatedAt)을 자동으로 관리
  { timestamps: true }
);

module.exports = mongoose.model('Question', QuestionSchema);
