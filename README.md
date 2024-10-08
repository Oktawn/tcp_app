## lab1

Цель работы: изучить методы создания серверов с установлением логического соединения TCP, используя алгоритм последовательной обработки запросов.

Задание: Разработать приложение, реализующее архитектуру «клиент-сервер». Необходимо реализовать последовательный сервер с установлением логического соединения (TCP).

Логику взаимодействия клиента и сервера реализовать следующим образом:
```
Клиент посылает два числа серверу и одну из математических операций: «\*», «/», «+», «–», – сервер соответственно умножает, делит, складывает либо вычитает эти два числа и посылает ответ назад клиенту.
```

## lab2

Цель работы: изучить методы создания серверов без установления логического соединения UDP, используя алгоритм последовательной обработки запросов

Задание: Разработать приложение, реализующее архитектуру «клиент-сервер». Необходимо реализовать последовательный сервер без установления логического соединения (UDP).

Логику взаимодействия клиента и сервера реализовать следующим образом:

```
Клиент вводит с клавиатуры строку символов и посылает ее серверу. Признак окончания ввода строки – нажатие клавиши «Ввод». Сервер, получив эту строку, должен определить длину введенной строки, и, если эта длина кратна 3, то удаляются все числа, которые делятся на 3. Результаты преобразований этой строки возвращаются назад клиенту.
```

## lab3

Цель работы: изучить методы создания серверов без установления логического соединения UDP, используя алгоритм последовательной обработки запросов

Задание: Разработать приложение, реализующее архитектуру «клиент-сервер». Для этого необходимо реализовать параллельный многопоточный сервер с установлением логического соединения (TCP). Логику взаимодействия клиента и сервера реализовать так, как указано в варианте индивидуального задания. Предусмотреть возможность просмотра, добавления, редактирования, удаления информации клиентом на сервере.

Логику взаимодействия клиента и сервера реализовать следующим образом:

```
На сервере хранится список студентов. Каждая запись списка содержит следующую информацию о студенте:
* ФИО студента;
* номер группы;
* размер стипендии;
* оценки по N предметам.

Таких записей должно быть не менее пяти. Клиент вводит с клавиатуры букву алфавита, по которой он хотел бы посмотреть информацию о студентах, и посылает ее на сервер. Назад он получает список только тех студентов, фамилии которых начинаются на эту букву.
```
