let names = ["iPhone 15", "Samsung S23", "Oppo Reno", "Xiaomi 13", "Nokia C20"];
let prices = [1200, 900, 450, 600, 80];
let stocks = [10, 5, 0, 8, 15];
let choice;
do {
    choice=+prompt(`--- HỆ THỐNG QUẢN LÝ KHO HÀNG ---
1. Lọc sản phẩm cao cấp (>500)
2. Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)
3. Phân tích giá trị vốn hóa (Tổng tài sản)
4. Triển khai chiến dịch chiết khấu (Giảm 10%)
5. Truy vấn sản phẩm theo từ khóa
6. Báo cáo tình trạng tồn kho
7. Thoát chương trình

Vui lòng nhập lựa chọn của bạn (1-7):`);

// Chức năng 1: Lọc danh mục sản phẩm cao cấp
// Yêu cầu: Xác định và trích xuất tên của những sản phẩm có giá trị niêm yết trên 500.
// Đầu ra: Một thông báo hiển thị danh sách tên các sản phẩm thỏa mãn điều kiện.
    const filterVipGood=(name, price)=>{
        let good = name.filter((el,index)=>{
            return price[index]>500
        })
        alert(`Danh sách các san phầm cao cấp(>500):
${good}`);
        
    }

// Chức năng 2: Kiểm định trạng thái dữ liệu
// Yêu cầu 1: Kiểm tra xem trong kho có tồn tại ít nhất một sản phẩm nào đã chạm mức 0 (hết hàng) hay không.
// Yêu cầu 2: Xác nhận xem liệu toàn bộ danh mục hàng hóa có đảm bảo mức giá sàn trên 100 hay không.
    const checkStatus=(price,stock)=>{
        let request1=stock.some((el)=>{
            return el===0
        });
        let request2=price.every((el)=>{
            return el>100
        })
            if(request1===true){
                alert("Có sản phẩm hết hàng")
            }else{
                alert("Không có sản phẩm nào hết hàng")
            }

            if(request2===true){
                alert("Tất cả sản phẩm giá > 100")
            }else{
                alert("Vẫn còn sản phẩm giá <100")
            }


    }

// Chức năng 3: Phân tích giá trị vốn hóa
// Yêu cầu: Tính toán tổng giá trị tài sản hiện có trong kho hàng.
// Công thức:
// Kỹ thuật: Sử dụng phương thức thu gọn mảng về một giá trị duy nhất.
    const totalPrice=(price,stock)=>{
        let totalArray=price.map((el,index)=>{
            return el * stock[index]
        })
    let total=totalArray.reduce((acc,cur)=>{
        return acc+cur
    },0) 
        alert(`Tổng giá trị tài sản hiện có trong kho: ${total} USD`)      
    }

// Chức năng 4: Triển khai chiến dịch chiết khấu
// Yêu cầu: Áp dụng mức giảm giá 10% đồng loạt cho tất cả sản phẩm hiện có.
// Ràng buộc: Giá trị sau khi giảm phải được cập nhật trực tiếp vào mảng prices gốc.
    const discountPrice=(price)=>{
        let discount =price.map((el)=>{
            return el=el-el/10
        })
        
        return discount
    }

// Chức năng 5: Truy vấn sản phẩm theo từ khóa
// Yêu cầu: Tiếp nhận từ khóa tìm kiếm từ người dùng. Tìm tất cả các sản phẩm mà tên có chứa từ khóa đó (không phân biệt hoa thường).
// Đầu ra: Hiển thị thông tin chi tiết (Tên - Giá - Số lượng) của các kết quả tìm thấy.
    const findGood=(searchGood, nameGood)=>{
        let findArray=[]
        nameGood.forEach((el,index) => {
            if(el.toLowerCase().includes(searchGood.toLowerCase().trim())){
                findArray.push(`${names[index]} - Giá:${prices[index]} - Kho:${stocks[index]} ${"\n"}`)
            }
        });
        return findArray.join('')
    }

// Chức năng 6: Báo cáo tình trạng tồn kho
// Yêu cầu: Tạo ra một danh sách trạng thái mới dựa trên số lượng tồn kho.
// Logic: Nếu số lượng > 0 ghi "Còn hàng", ngược lại ghi "Hết hàng".
// Đầu ra: Hiển thị danh sách sản phẩm kèm trạng thái tương ứng.
    const checkStock =(name,stock)=>{
        let resultStock=stock.forEach((el,index)=>{
            if(el>0){
                resultStock[index]==="Còn hàng"
            }else{
                resultStock[index]==="Hết hàng"
            }
        })
        name.forEach((el,index)=>{
            alert(`Báo cáo tồn kho:
                ${name[index]}: ${resultStock[index]}
                `)
        })

    }
    
    switch (choice) {
        case 1:
            filterVipGood(names,prices)
            break;
        case 2:
            checkStatus(prices,stocks)
            break;
        case 3:
            totalPrice(prices,stocks)
            break;
        case 4:
            prices= discountPrice(prices)
            alert("Đã cập nhật giảm giá 10% cho toàn bộ sản phẩm");
            break;
        case 5:
            let searchItem=prompt("Nhập tên sản phẩm bạn muốn tìm kiếm")
            if(findGood(searchItem,names)){
                alert(findGood(searchItem,names))
            }else{
            alert("Không tìm thấy sản phẩm ")
            }
            break;
        case 6:

            break;
        case 7:
            alert("Đã thoát chương trình. Hẹn gặp lại")
            break;
    
        default:
            break;
    }

} while (choice!==7);