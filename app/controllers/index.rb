get '/' do
  @imports = IMPORTS.dup
  erb :index
end

get '/data' do
	series = params.keys[0]
	generator = DataGenerator.new
	data = generator.retrieve_data(series)
	labels = data.keys.reverse
	values = data.values.reverse
	[labels, values].to_json
end