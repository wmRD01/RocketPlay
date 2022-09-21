
if (window.language_Mode == null) {
    var language_Mode = {};
    language_Mode.NTD = {};
}

//===============<<火箭文字>>===============//
//#region 
//----------------系統區塊------------	
language_Mode.NTD["S_0001"] = "連線錯誤，詳細情況請洽客服!!";
language_Mode.NTD["S_0002"] = "連線中斷，詳細情況請洽客服!!";
language_Mode.NTD["S_0003"] = "語言包下載失敗請通知客服";

//----------------後控系統區塊------------		
language_Mode.NTD["100"] = "您已被踢除，\r\n請聯繫客服!!";
//----------------後控系統區塊------------		
language_Mode.NTD["1001"] = "系統即將維修，請玩家提早離開遊戲，謝謝!!";
language_Mode.NTD["1002"] = "系統維​​護,連線中斷!!";
language_Mode.NTD["1011"] = "系統連線逾時!!";

language_Mode.NTD["1911"] = "系統傳入參數錯誤, 無法執行指定項目!!";
//----------------玩家區塊------------		
language_Mode.NTD["2000"] = "登入失敗";
language_Mode.NTD["2001"] = "無此帳號";
language_Mode.NTD["2002"] = "密碼錯誤";
language_Mode.NTD["2003"] = "帳號停用";
language_Mode.NTD["2004"] = "密碼錯誤超過次數";
language_Mode.NTD["2005"] = "非會員帳號";
language_Mode.NTD["2007"] = "請勿連續登入";
language_Mode.NTD["2008"] = "帳號重覆登入";

language_Mode.NTD["2100"] = "玩家不存在";
language_Mode.NTD["2101"] = "玩家已在大廳";
language_Mode.NTD["2102"] = "玩家斷線";

language_Mode.NTD["2121"] = "遊戲資料同步錯誤,請重新登入";
language_Mode.NTD["2122"] = "玩家籌碼不足";
language_Mode.NTD["2123"] = "玩家代幣不足";

language_Mode.NTD["2200"] = "儲值失敗";
language_Mode.NTD["2201"] = "遊戲中無法儲值, 請至大廳進行操作";

language_Mode.NTD["2210"] = "分段儲值順序錯誤.";

language_Mode.NTD["2501"] = "查無歷史記錄";
language_Mode.NTD["2502"] = "請再試一次";

language_Mode.NTD["2990"] = "系統異常, 請洽詢客服";
//----------------大廳及遊戲房區塊------------
language_Mode.NTD["3000"] = "湊桌失敗";
language_Mode.NTD["3001"] = "玩家已在遊戲中, 無法再湊桌";
language_Mode.NTD["3051"] = "玩家不在湊桌狀態, 取消失敗";

language_Mode.NTD["3200"] = "入房失敗";
language_Mode.NTD["3201"] = "級別區錯誤";
language_Mode.NTD["3202"] = "該房不存在";
language_Mode.NTD["3203"] = "無房可用";
language_Mode.NTD["3204"] = "遊戲中無法離開";
language_Mode.NTD["3205"] = "玩家未準備就緒";
language_Mode.NTD["3206"] = "玩家目前入房資格不符，無法入房";
language_Mode.NTD["3207"] = "密碼錯誤";

language_Mode.NTD["3210"] = "該房人數已滿";
//----------------座位及遊戲前區塊------------
language_Mode.NTD["4300"] = "入座失敗";
language_Mode.NTD["4301"] = "座位不存在";
language_Mode.NTD["4302"] = "已有人在座位上";
language_Mode.NTD["4303"] = "尚未入座";
language_Mode.NTD["4304"] = "已無空位";

language_Mode.NTD["4350"] = "暫時不允許玩家入座下注";
language_Mode.NTD["4351"] = "玩家點數異動異常，無法再下注";
language_Mode.NTD["4352"] = "玩家錢包金額異常，無法再下注";

//----------------遊戲區塊------------
language_Mode.NTD["5001"] = "遊戲中思考逾時過多, 請玩家重連遊戲!";
language_Mode.NTD["5002"] = "遊戲注額已確認, 無法變更";
language_Mode.NTD["5003"] = "下注額低於設定值, 無法下注";
language_Mode.NTD["5004"] = "下注額超過上限額度, 無法下注";
language_Mode.NTD["5005"] = "注單不存在";
language_Mode.NTD["5006"] = "注單不可重覆";

language_Mode.NTD["5101"] = "(補點) 玩家籌碼足夠, 不需補點.";
language_Mode.NTD["5102"] = "(補點) 補點總額不足最小帶入, 不予補點.";
//----------------房卡(開房)系統------------
language_Mode.NTD["6001"] = "創房失敗";
language_Mode.NTD["6002"] = "私房已關閉";

language_Mode.NTD["6102"] = "非房主無法執行此功能命令";
language_Mode.NTD["6103"] = "房主尚未允許入座遊戲";
language_Mode.NTD["6105"] = "遊戲房已進入遊戲啟動狀態";
language_Mode.NTD["6106"] = "遊戲房已結算";

//#endregion
//===============<<火箭文字>>===============//
function returnMode() {
    return language_Mode.NTD
}