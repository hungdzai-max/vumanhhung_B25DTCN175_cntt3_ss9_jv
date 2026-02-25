
const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];
// Chức năng 1: Xem danh sách cầu thủ (Sử dụng map hoặc forEach)
// - In ra danh sách toàn bộ đội bóng.
// - Định dạng in: "Tên (Vị trí): ... bàn thắng".

const displayList = (listArray) =>{
    listArray.forEach((el,index) => {
        console.log(`${el[0]} (${el[2]}): ${el[1]} bàn thắng`);
        
    })
}

// Chức năng 2: Tìm kiếm cầu thủ (Sử dụng find)
// - Nhập tên cầu thủ cần tìm.
// - Dùng hàm find để tìm trong mảng.
// - Nếu thấy: In ra đầy đủ thông tin.
// - Nếu không thấy: In báo lỗi.
const searchPlayer= (listArray)=>{
    let findTrue=false;
    let searchName=prompt("Nhập tên bạn cần tìm");
    let result=listArray.find((el,index)=>{
        return el[0]===searchName 
    })
    if(result===undefined){
        console.log("Không tìm thấy cầu thủ");
        
    }else{
        console.log(`${result[0]} (${result[2]}): ${result[1]} bàn thắng`);
        
    }    
}

// Chức năng 3: Lọc cầu thủ theo vị trí (Sử dụng filter)
// - Nhập vị trí cần lọc (Ví dụ: FW, MF, DF, GK).
// - Dùng hàm filter để tạo danh sách con.
// - In danh sách kết quả ra màn hình.
const filterPosition =(array)=>{
    let position=prompt("Nhập vị trí cần lọc (Ví dụ: FW, MF, DF, GK).");
    let result= array.filter((el)=>{
        return el[2]===position
    })
    console.log(result);
    
}

// Chức năng 4: Thống kê tổng bàn thắng (Sử dụng reduce)
// - Dùng hàm reduce tính tổng số bàn thắng của cả đội.
// - In kết quả: "Tổng số bàn thắng hiện tại là: ..."
const totalGoal=(array)=>{
    let total = array.reduce((acc,cur)=>{
        return acc+=cur[1];
    },0)
    console.log(`Tổng số bàn thắng hiện tại là: ${total}`);
    
}

// Chức năng 5: Kiểm tra hiệu suất (Sử dụng some và every)
// - Kiểm tra có cầu thủ nào chưa ghi bàn (0 bàn) không? (Dùng some) -> In ra “Có cầu thủ chưa ghi bàn”.
// - Kiểm tra có phải tất cả cầu thủ đều đã ghi bàn (> 0) không? (Dùng every) -> In ra " tất cả cầu thủ đều đã ghi bàn" .
const efficiency=(array)=>{
    if(array.some((el)=>{
        return el[1]===0
    })){
        console.log("Có cầu thủ chưa ghi bàn");
        
    }else if(array.every((el)=>{
        return el[1]!==0        
    })){
        console.log( " tất cả cầu thủ đều đã ghi bàn");
        
    }
}

// Menu
let choice;
do{
 choice=+prompt(`
--- QUẢN LÝ ĐỘI BÓNG ---
1. Xem danh sách
2. Tìm kiếm (Find)
3. Lọc vị trí (Filter)
4. Tổng bàn thắng (Reduce)
5. Kiểm tra hiệu suất (Some/Every)
0. Thoát`);

    switch (choice) {
        case 1:
            displayList(squad)
            break;
        case 2:
            searchPlayer(squad)
            break;
        case 3:
            filterPosition(squad)
            break;
        case 4:
            totalGoal(squad)
            break;
        case 5:
            efficiency(squad)
            break;
        case 0:
            alert("=> Hẹn gặp lại!")
            break;
    
        default:
            break;
    }

}while(choice!==0)

// Chức năng 1: Xem danh sách cầu thủ (Sử dụng map hoặc forEach)
// - In ra danh sách toàn bộ đội bóng.

// - Định dạng in: "Tên (Vị trí): ... bàn thắng".
