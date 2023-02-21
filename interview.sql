-- What does this query do ?

select *
from orders o
         join users u on u.id = o.user_id
where o.created_at > '2021-12-17'
  and o.status = 'IN_PROGRES';
