module.exports = function( options ) {
    var seneca = this;

    // Ở đây, chúng tôi xác định hàm sumFunc và thêm vào Seneca bằng cách sử dụng hàm seneca.add .
    // Định danh là { role:'process', cmd:'sum' }.
    seneca.add( { role:'process', cmd:'sum' }, sumFunc );

    function sumFunc ( args, done ) {
        var numbers = args.numbers;

        var result = numbers.reduce( function( a, b ) {
            return a + b;
        }, 0);

        // sumFunc gọi hàm done và gửi đối tượng kết quả. Hàm Seneca trả về các đối tượng theo mặc định, nhưng nó cũng có thể được tùy chỉnh để trả về chuỗi hoặc số.
        done( null, { result: result } );
    }
}
