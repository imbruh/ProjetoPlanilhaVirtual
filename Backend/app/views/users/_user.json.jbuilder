json.extract! user, :id, :nome, :usuario, :senha, :salario, :created_at, :updated_at
json.url user_url(user, format: :json)
