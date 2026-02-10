import java.util.ArrayList;
import java.util.Scanner;
import java.util.regex.Pattern;

// Person class to store individual user info
class Person {
    private String fullName;
    private int age;
    private String email;
    private String phone;
    private String country;

    // Constructor
    public Person(String fullName, int age, String email, String phone, String country) {
        this.fullName = fullName;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.country = country;
    }

    // Display method
    public void displayInfo() {
        System.out.println("\n--- User Information ---");
        System.out.println("Full Name: " + fullName);
        System.out.println("Age: " + age);
        System.out.println("Email: " + email);
        System.out.println("Phone: " + phone);
        System.out.println("Country: " + country);
    }
}

// Main class with menu
public class Project {
    private static Scanner scanner = new Scanner(System.in);
    private static ArrayList<Person> people = new ArrayList<>();

    public static void main(String[] args) {
        System.out.println("=== Person Info Manager ===");

        boolean running = true;
        while (running) {
            System.out.println("\n1. Add Person");
            System.out.println("2. Show All People");
            System.out.println("3. Exit");
            System.out.print("Choose an option: ");
            String choice = scanner.nextLine();

            switch (choice) {
                case "1":
                    addPerson();
                    break;
                case "2":
                    showAllPeople();
                    break;
                case "3":
                    running = false;
                    System.out.println("Exiting program. Goodbye!");
                    break;
                default:
                    System.out.println("Invalid option! Try again.");
            }
        }
        scanner.close();
    }

    // Add a person with input validation
    private static void addPerson() {
        System.out.print("Enter full name: ");
        String name = scanner.nextLine();

        int age = 0;
        while (true) {
            System.out.print("Enter age: ");
            String ageInput = scanner.nextLine();
            try {
                age = Integer.parseInt(ageInput);
                if (age > 0 && age < 120) break;
                else System.out.println("Enter a valid age!");
            } catch (NumberFormatException e) {
                System.out.println("Invalid input! Enter a number.");
            }
        }

        String email = "";
        while (true) {
            System.out.print("Enter email: ");
            email = scanner.nextLine();
            if (isValidEmail(email)) break;
            else System.out.println("Invalid email format!");
        }

        System.out.print("Enter phone number: ");
        String phone = scanner.nextLine();

        System.out.print("Enter country: ");
        String country = scanner.nextLine();

        Person person = new Person(name, age, email, phone, country);
        people.add(person);

        System.out.println("Person added successfully!");
    }

    // Display all stored people
    private static void showAllPeople() {
        if (people.isEmpty()) {
            System.out.println("No people added yet.");
        } else {
            for (Person p : people) {
                p.displayInfo();
            }
        }
    }

    // Simple email validation
    private static boolean isValidEmail(String email) {
        String regex = "^[\\w.-]+@[\\w.-]+\\.\\w{2,}$";
        return Pattern.matches(regex, email);
    }
}
