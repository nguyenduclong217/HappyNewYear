import React from "react";
export default function Chuc() {
  const name = localStorage.getItem("username")?.toLowerCase().trim() ?? "";
  //   console.log(name);

  const wishes = {
    khánh: "Chúc Khánh năm mới thật nhiều sức khỏe nha🎉",
    công: "Chúc Công năm mới thật nhiều sức khỏe, lương lậu thì cứ phải đầu chục là ít🎉",
    "hải quỳnh":
      "Chúc Hải Quỳnh thảo mai năm mới sức khỏe, nói ra vàng, thốt ra ngọc và gạp nhiều may nắm trong năm mới🎉",
    "quỳnh anh":
      "Chúc Quỳnh Anh và gia đình năm mới sức khỏe và thật nhiều may mắn trong năm mới, sớm bay nha🎉",
    tú: "Chúc anh Tú năm mới có chặng đường mới, hành trình mới,thật nhiều may mắn trong năm nay nha🎉",
    trung:
      "Năm mới em chúc anh Trung năm mới thuận lợi đủ đường, tìm được con đường bắt đầu hành trình mới 🎉",
    nhung:
      "Đầu năm chúc Nhung và gia đình luôn ngập tràn niềm vui,sức khỏe thì đỉnh nóc kịch trần,học hành suôn sẻ .Đặc biệt là mong sao trong năm code sẽ ít bug hơn:>",
    đoàn: "Đoàn đấy à em. Em đừng có chối, năm mới em nhanh ăn chóng lớn cầm sp bớt sv đi thì hết chê",
    "bảo long":
      "Năm mới chúc bác sức khỏe dồi dào, khỏe mạnh. Tôi sống được hay không phải nhờ bác nhiều đấy=))",
    tài: "Năm mới chúc bạn tôi nhiều may mắn, gặt hát thành công trên con đường mình chọn 🎉",
    "hoàng anh":
      "Năm mới chúc bác ăn không lo mập, tiêu tiền không lo hết, học bổng thì cứ phải săn 🎉",
    phước:
      "Chúc Phước và gia đình luôn tràn đầy sức khỏe, anh chị em luôn đoàn kểt. Năm mới chuẩn bị lên đường sẽ thuận lợi ,gặp được nhiều may nắm trên con đường bạn chọn 🎉",
    sơn: "Chúc anh Sơn và chị Lan Anh năm mới thật nhiều sức khỏe, lên đường thành công gặp được nhiều may mắn trong năm tới",
    "lan anh":
      "Chúc anh Sơn và chị Lan Anh năm mới thật nhiều sức khỏe, lên đường thành công gặp được nhiều may mắn trong năm tới",
    giang:
      "Năm mới em chúc anh Giang năm mới làm ăn phát đạt, kiếm tiền thật nhiều sức khỏe thì cứ phải đỉnh nóc kịch trần 🎉",
    phong:
      "Chúc Bống năm mới cùng gia đình thật nhiều sức khỏe, học hành tiến bộ, chơi vui thôi chứ đừng vui quá:> ",
    linh: "Chúc Chị Linh năm mới xinh hơn này,gặp được nhiều may nắm trong năm",
    mai: "Chúc Ồ năm mới ăn không lo mập, học tập luôn đỉnh của chóp(chóp nào thì không biết)",
    huyền:
      "Chúc chị Huyền thành công trong công việc,chăm chỉ hơn cả ong trong năm mới nha 🎉",
    thắng:
      "Năm mới em chúc anh Thắng cùng chị Dĩm luôn hạnh phúc, tình cảm như nước ngoài biển, tiền kiếm thì cứ phải đóng thành cọc",
    diễm: "Năm mới em chúc anh Thắng cùng chị Dĩm luôn hạnh phúc, tình cảm như nước ngoài biển, tiền kiếm thì cứ phải đóng thành cọc",
    lợi: "Chúc anh Lợi và chị Thủy năm mới tràn đầy may mắm, làm không biết mệt, tình cảm thắm thiết lúc nào cũng tươi",
    "mai trang":
      "Nghe đâu chụy Trang năm sau cưới đúng không ta.Năm mới em chúc chị cùng gia đình thật nhiều sức khỏe làm ăn phát đạt và đặc biệt luôn Xinh,trẻ đẹp như gái 17 nha chụy:>",
    hùng: "Năm mới chúc Hùng và gia đình thật nhiều sức khỏe, năm mới tiến nhanh như ngựa, gặp được nhiều may mắn nha:>",
    quang:
      "Năm mới em chúc anh luôn mạnh khỏe tình yêu hay công việc đều thuận lợi xuôi buồm.Có gì lên bác thì cứ hú em nha anh",
    hải: "Chúc anh chị năm mới sức khỏe, cửa hàng luôn đông khách,buôn bán thuận lợi,lời lãi ngập tràn",
    hà: "Năm mới chúc anh chị kinh doanh thuận buồm xuôi gió,buôn may bán đắt quanh năm",
    hùng: "Năm mới chúc anh chị kinh doanh thuận buồm xuôi gió,buôn may bán đắt quanh năm",
    phương:
      "Năm mới chúc bác sức khỏe,buôn may bán đắt, khách hàng đến như nước,tiền bạc rủng rỉnh 🎉",
    dân: "Năm mới chúc bác sức khỏe,buôn may bán đắt, khách hàng đến như nước,tiền bạc rủng rỉnh 🎉",
    hòa: "Năm mới chúc Hòa cùng gia đình thật nhiều sức khỏe, gặp nhiều may mắn và chúc Hòa chăm chỉ hơn ong máy săn học bổng nha",
    sang: "Chúc bạn tôi năm mới cùng gia đình sức khỏe, may mắn trong năm tới",
    "hồng anh":
      "Chúc bạn năm mới và gia đình thật nhiều sức khỏe. Sinh nhật năm 1-2 ngày thôi ,sớm thành công ở hy:3",
    dũng: "Chúc Dũng năm mới cùng gia đình sức khỏe dồi dào, đỗ B2 phát một, nhanh chóng có thể sang Đức và bắt đầu hành trình mới",
    "quốc dũng":
      "Năm mới em chúc anh và gia đình thật nhiều sức khỏe, mọi thứ đều suôn sẻ và vẫn luôn sát sao trong việc chỉ dạy học viên nha anh zai",
    huy: "Chúc anh Huy kiu kiu năm mới thật nhiều sức khỏe và hoàn thành tốt những dự án trong năm mới, code hoài không bug nha anh",
    hoàng:
      "Năm mới chúc anh thật nhiều sức khỏe, gặp nhiều may mắn trong năm mới và làm ra được nhiều dự án chất lượng hơn",
    an: "Năm mới em chúc anh An thật nhiều sức khỏe, nhậu hoài không say không mệt, mọi điều đều thuận lợi",
    "mạnh hùng":
      "Năm mới chúc Hùng và gia đình luôn mạnh khỏe, gặp nhiều may mắn trong và suôn sẻ trong năm nay",
  };
  const message =
    wishes[name] || `Chúc ${name} năm mới an khang thịnh vượng 🎉`;
  return (
    <div className="bg-red-700 w-[100%] h-120 py-1 flex justify-center items-center gap-1">
      <div className="w-[49%] hidden md:block">
        <img src="/Lixi2.png" alt="" />
      </div>
      <div className="w-[99%] md:w-[49%] h-full p-6 bg-amber-300 flex flex-col justify-center">
        <h1 className="text-[22px] font-bold text-red-700 mb-4">
          Chúc mừng năm mới 🎊
        </h1>

        <p className="text-lg text-red-800 font-semibold">{message}</p>
      </div>
    </div>
  );
}
