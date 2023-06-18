4 - Історія транзакцій
Необхідно створити компонент історії транзакцій в особистому кабінеті інтернет-банку.

component preview
Дані для списку доступні у форматі JSON у файлі transactions.json. Це масив об'єктів, де кожен об'єкт описує одну транзакцію з наступними властивостями:

id — унікальний ідентифікатор транзакції
type — тип транзакції
amount - сума транзакції
currency - тип валюти
Опис компонента <TransactionHistory>
Необхідно створити компонент <TransactionHistory>, який приймає один проп items – масив об'єктів транзакцій з transactions.json. Компонент створює розмітку таблиці. Кожна транзакція – це рядок таблиці. У прикладі наведена розмітка двох транзакцій.

<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

Приклад використання
import transactions from 'path/to/transactions.json';

<TransactionHistory items={transactions} />;