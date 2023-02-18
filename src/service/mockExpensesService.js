const mockExpenses = [
    {"date":"1/03/2021","amount":30,"description":"Internet y Movil","budgetItem":"Gastos","type":"Internet"},
    {"date":"1/03/2021","amount":25,"description":"Garaje","budgetItem":"Gastos","type":"Vehiculos"},
    {"date":"1/03/2021","amount":4,"description":"Netflix","budgetItem":"Lujo","type":"Televisión"},
    {"date":"1/03/2021","amount":82.27,"description":"Tarjeta","budgetItem":"","type":""},
    {"date":"2/03/2021","amount":0,"description":"Fotocopias Vanessa","budgetItem":"","type":""},
    {"date":"3/03/2021","amount":0.99,"description":"ICloud","budgetItem":"Lujo","type":"Servicios"},
    {"date":"5/03/2021","amount":-119.92,"description":"Gastos Vane","budgetItem":"","type":""},
    {"date":"6/03/2021","amount":23.11,"description":"Lidl 6","budgetItem":"Gastos","type":"Supermercado"},
    {"date":"7/03/2021","amount":15,"description":"Gasolina Clio","budgetItem":"Gastos","type":"Gasolina"},
    {"date":"7/03/2021","amount":54.98,"description":"Fuente de Alimentación","budgetItem":"Lujo","type":"Electrónica"},
    {"date":"9/03/2021","amount":32.5,"description":"Comunidad","budgetItem":"Gastos","type":"Hogar"},
    {"date":"12/03/2021","amount":34.412,"description":"Lidl 13","budgetItem":"Gastos","type":"Supermercado"},
    {"date":"12/03/2021","amount":3.34,"description":"Lidl 13 Perros","budgetItem":"Gastos","type":"Supermercado"},
    {"date":"13/03/2021","amount":28.89,"description":"Lidl 20","budgetItem":"Gastos","type":"Supermercado"},
    {"date":"14/03/2021","amount":8.4,"description":"Lidl 20","budgetItem":"Gastos","type":"Supermercado"},
    {"date":"15/03/2021","amount":24.805,"description":"Luz","budgetItem":"Gastos","type":"Luz"},
    {"date":"15/03/2021","amount":1.99,"description":"Drive","budgetItem":"Lujo","type":"Servicios"},
    {"date":"16/03/2021","amount":31.39,"description":"Lidl 27","budgetItem":"Gastos","type":"Supermercado"},
    {"date":"16/03/2021","amount":1.615,"description":"Lidl 27","budgetItem":"Gastos","type":"Supermercado"},
    {"date":"18/03/2021","amount":48.23,"description":"Comida Perros","budgetItem":"Gastos","type":"Mascotas"},
    {"date":"18/03/2021","amount":1.3,"description":"Unide 12","budgetItem":"Gastos","type":"Supermercado"},
    {"date":"20/03/2021","amount":1,"description":"Unide 12 (Bollo)","budgetItem":"Gastos","type":"Supermercado"},
    {"date":"24/03/2021","amount":8.8,"description":"Ratón","budgetItem":"Gastos","type":"Electrónica"},
];

const mockExpensesService = {
    getExpenses: () => {
        return Promise.resolve(mockExpenses);
    },
};

export default mockExpensesService;