const db = require("../db/db.js");

class MemberDAO {
  async ListAllMembers() {
    const members = await db
      .select("Members.name", "Members.base64_image")
      .from("Members");
    return members;
  }
}

module.exports = new MemberDAO();
