import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pandas as pd

# Set seaborn style - using set_style instead of plt.style.use
sns.set_style("whitegrid")

# Create sample data
np.random.seed(42)
x = np.linspace(0, 10, 100)
y = 2 * x + np.random.normal(0, 1, 100)
data = pd.DataFrame({
    'x': x,
    'y': y,
    'category': np.random.choice(['A', 'B', 'C'], 100)
})

# 1. Basic Matplotlib Line Plot
plt.figure(figsize=(10, 6))
plt.plot(x, y, 'b-', label='Data')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Basic Line Plot with Matplotlib')
plt.legend()
plt.grid(True)
plt.show()

# 2. Matplotlib Scatter Plot
plt.figure(figsize=(10, 6))
plt.scatter(x, y, c='red', alpha=0.5)
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Scatter Plot with Matplotlib')
plt.show()

# 3. Seaborn Histogram and KDE
plt.figure(figsize=(10, 6))
sns.histplot(data=data, x='y', kde=True)
plt.title('Histogram with KDE using Seaborn')
plt.show()

# 4. Seaborn Box Plot
plt.figure(figsize=(10, 6))
sns.boxplot(data=data, x='category', y='y')
plt.title('Box Plot by Category using Seaborn')
plt.show()

# 5. Seaborn Regression Plot
plt.figure(figsize=(10, 6))
sns.regplot(data=data, x='x', y='y')
plt.title('Regression Plot using Seaborn')
plt.show()

# 6. Seaborn Joint Plot
sns.jointplot(data=data, x='x', y='y', kind='reg')
plt.show()

# 7. Seaborn Pair Plot
sns.pairplot(data=data, hue='category')
plt.show()