release: python mysite/manage.py migrate
release: echo "from django.contrib.auth.models import User; User.objects.filter(email='admin@example.com').delete(); User.objects.create_superuser('admin', 'admin@example.com', 'nimda')" | python mysite/manage.py shell
web: gunicorn --pythonpath mysite mysite.wsgi
