const memberService = require("../service/member");

class MemberController {
  async listMemberService(req, res) {
    try {
      const members = await memberService.listMembers();
      res.status(200).send(members);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: `error: ${error}` });
    }
  }
}

module.exports = new MemberController();
