const { model, Schema } = require("mongoose");
const USER_ROLES = require("./userRoleEnum");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      minLength: [6, "First name length must be at least 6 characters"],
      maxLength: [50, "First name length must be 6 to 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
      enum: Object.values(USER_ROLES),
      default: USER_ROLES.USER,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);
module.exports = UserModel;
