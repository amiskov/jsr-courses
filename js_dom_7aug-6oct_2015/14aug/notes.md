
# FF
У фф проблемы с let. Они его использовали давным-давно, внутри ФФ он используется, а теперь им надо все переделать. 
Поэтому можно писать <script type="application/javascript;version=1.7">, чтобы у ФФ работала let сейчас.

# Babel 
<script type="text/babel"> - для Plunker


# Ошибка в JS
typeof null // => "object". Ошибка в языке. Аккуратно при определении типа.


# Проверка на массив
Array.isArray([]); // => true, можно использовать


# Скопировать объект
JSON.stringify(obj); // => str
JSON.parse(str); // => obj
И получается полный клон объекта. Хитрость такая. Затратнее, но просто. Это если надо быстро и без лишних функций и 
библиотек.




