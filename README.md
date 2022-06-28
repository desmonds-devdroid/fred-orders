# fred-orders
Fred's Orders

# Objects
- order
- ordersDb
    - countOrdersByDay
    - createOrderPackage
    - getOrdersByDay
    - getOrdersByMonth
    - getOrdersByYear
    - getOrders
    !--
        - ordersRoot
        - yearRoot
        - monthRoot
        - dayRoot
        - orderPackageRoot 
    -->

# Orders Folder Structure

- OrdersRoot
    - YearRoot
        - MonthRoot
            - DayRoot
                - OrderPackageRoot
                    - AssetFile
                    - AssetFile

E.g.:
- OrdersRoot    [e.g. c:/abc/xyz/Orders/]
    - 2021
    - 2022
        - January
        - February
            - 2022-02-01
            - 2022-02-02
                - 20220202-001
                - 20220202-002      [folder name = order number]
                    - order.txt
                    - customer.txt
                    - address.txt
                    - products.txt
                    - payment.txt
                    - payment-screenshot.png
                    - order-screenshot1.png
                    - order-screenshot2.png

