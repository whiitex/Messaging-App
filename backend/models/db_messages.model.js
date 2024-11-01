const mongoose = require("mongoose");

const messagesSchema = mongoose.Schema(
    {
        conversationId: {
          type: String,
        },
        sender: {
          type: String,
        },
        text: {
          type: String,
        },
      },
      { timestamps: true }
    );

module.exports = mongoose.model("Message", messagesSchema);