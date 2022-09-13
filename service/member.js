const memberDAO = require("../dao/member");

class MemberService {
  listMembers() {
    return memberDAO.ListAllMembers();
  }
}

module.exports = new MemberService();
