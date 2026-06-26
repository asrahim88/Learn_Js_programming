#                  BMI Calculator:

weight = float(input("Enter weight in kG: "))
height = float(input("Enter height in foot: ")) * 0.3048 #convert to meter 

BMI = weight / (height * height)

if BMI >=30:
    print(f"Obese Weight and BMI number : {BMI:.2f}")
elif BMI <30 and BMI >=25:
    print(f"Over Weight and BMI number : {BMI:.2f}")
elif BMI < 25 and BMI >= 18.5:
    print(f"Normal Weight and BMI number : {BMI:.2f}")
else: 
    print(f"Under Weight and BMI number: {BMI:.2f}")
