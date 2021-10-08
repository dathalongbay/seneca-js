var seneca = require('seneca')();

/*
* Trước khi bắt đầu, hãy để tôi giải thích thêm cho bạn một vài điều. Không có bất kỳ quy ước nào về những gì chúng ta nên đặt bên trong các đối tượng JSON của mình, nhưng tôi đã phát hiện ra rằng rất nhiều người sử dụng cùng một phong cách. Tôi đang sử dụng cái này {role:'namespace', cmd:'action'}và tôi khuyên bạn nên dùng cái này. Tạo ra một phong cách mới có thể dẫn đến các vấn đề nếu bạn làm việc theo nhóm. Vai trò là tên của nhóm chức năng và cmd là tên của hành động. Chúng tôi sử dụng JSON này để xác định chức năng nào chúng tôi sẽ sử dụng.
*
*
* Tôi sẽ tạo hai tệp, index.jsvà process.js. index.jssẽ gửi một yêu cầu process.jsvới một số con số, tổng hợp nó, sau đó trả về kết quả. Kết quả sẽ được ghi trong bảng điều khiển từ index.jstệp. Nghe hay không? Hãy bắt đầu!
* */

// nói với Seneca rằng chúng tôi sẽ sử dụng tệp process.js và chúng tôi đã xác định chức năng của mình ở đó.
seneca.use( './process.js' );
// sử dụng seneca.act để gọi hàm from process.js
// act viết tắt của action
// Chúng tôi đang gửi đối tượng JSON cùng với role và cmd cùng với các đối số numbers
seneca.act( { role: 'process', cmd: 'sum', numbers: [ 1, 2, 3] }, function ( err, result ) {
    console.table( result );
    console.log( result );
} )
