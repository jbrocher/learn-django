python mysite/manage.py migrate
echo "from django.contrib.auth.models import User; User.objects.filter(username='admin').delete(); User.objects.create_superuser('admin', 'admin@example.com', 'laetitia')" | python mysite/manage.py shell
