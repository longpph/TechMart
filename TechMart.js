/**
 * HỆ THỐNG TÍNH TIỀN TECHMART (LEGACY CODE)
 * LỖI KIẾN TRÚC: Vi phạm nghiêm trọng nguyên lý Single Responsibility (SRP)
 */
function isCartEmpty(cart) {
    return !Array.isArray(cart) || cart.length === 0;
}

function calculateSubtotal(cart){
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal += cart[i].price * cart[i].quantity;
    }
    return subtotal;
}
function calculateDiscount(subtotal, customerType){
    let discount = 0;
    if (customerType === "VIP") {
        discount = subtotal * 0.20; // VIP giảm 20%
    } else if (customerType === "MEMBER") {
        discount = subtotal * 0.10; // Member giảm 10%
    }
    return discount;
}
function calculateTax(totalAfterDiscount){
    return totalAfterDiscount * 0.10; // Thuế 10%
}
function printInvoice(subtotal, discount, tax, finalTotal){
    console.log("--- HÓA ĐƠN TECHMART ---");
    console.log("Tạm tính: " + subtotal + " VNĐ");
    console.log("Giảm giá: " + discount + " VNĐ");
    console.log("Thuế VAT: " + tax + " VNĐ");
    console.log("TỔNG THANH TOÁN: " + finalTotal + " VNĐ");
    console.log("------------------------");
}
function processOrder(cart){
    if (isCartEmpty(cart)){
        console.log("Giỏ hàng trống. Vui lòng thêm sản phẩm vào giỏ hàng!");
        return 0;
    }else{
        let subtotal = calculateSubtotal(myCart);
        let discount = calculateDiscount(subtotal, "VIP");
        let totalAfterDiscount = subtotal - discount;
        let tax = calculateTax(totalAfterDiscount);
        let finalTotal = totalAfterDiscount + tax;
        printInvoice(subtotal, discount, tax, finalTotal)
    }
}
// Dữ liệu chạy thử
const myCart = [
    { item: "Laptop", price: 15000000, quantity: 1 },
    { item: "Chuột", price: 300000, quantity: 2 }
];
const emptyCart = [];
processOrder(myCart);
processOrder(emptyCart);

