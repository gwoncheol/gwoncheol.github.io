package JAVA1;

import java.util.ArrayList; // 배열 요소 추가, 삭제, 조회 등에 사용
import java.util.List; // 순서가 있는 요수들의 컬렉션
import java.util.Scanner; // 사용자 한테 입력받기 위한

class Room {
    private int roomNumber;
    private boolean isReserved;
    private String guestName;
    private String phoneNumber;

    public Room(int roomNumber) {
        this.roomNumber = roomNumber;
        this.isReserved = false;
        this.guestName = "";
        this.phoneNumber = "";
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public boolean isReserved() {
        return isReserved;
    }

    public String getGuestName() {
        return guestName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void reserveRoom(String guestName, String phoneNumber) {
        if (isReserved) {
            System.out.println("이미 예약된 객실입니다.");
            return;
        }//early return 사용

        this.isReserved = true;
        this.guestName = guestName;
        this.phoneNumber = phoneNumber;
        System.out.println("객실 " + roomNumber + "이(가) " + guestName + " 님에게 예약되었습니다. 전화번호: " + phoneNumber);
    }

    public void cancelReservation() {
        if (!isReserved) {
            System.out.println("이미 빈 객실입니다.");
            return;
        }

        this.isReserved = false;
        this.guestName = "";
        this.phoneNumber = "";
        System.out.println("객실 " + roomNumber + " 예약이 취소되었습니다.");
    }
}

class Hotel {
    private List<Room> rooms; // Room 객체 저장 리스트 생성

    public Hotel(int numberOfRooms) { // 생성자 함수
        rooms = new ArrayList<>();
        for (int i = 1; i <= numberOfRooms; i++) {
            rooms.add(new Room(i)); // numberOfRooms 만큼 Room 객체 생성
        }
    }

    public void displayAvailableRooms() {
        System.out.println("<사용 가능한 객실 목록>");
        for (Room room : rooms) { //room 리스트 순회함
            if (!room.isReserved()) { // isReserved가 false일 때, 예약 상태가 false일 때 
                System.out.println("객실 " + room.getRoomNumber());
            }
        }
    }

    public void displayReservedRooms() {
        System.out.println("<예약된 객실 목록>");
        for (Room room : rooms) { 
            if (room.isReserved()) { //예약 상태가 true 일 때
                System.out.println("객실 " + room.getRoomNumber() + ": " + room.getGuestName() + ", 전화번호: " + room.getPhoneNumber());
            }
        }
    }

    public Room getRoomByNumber(int roomNumber) {
        for (Room room : rooms) {
            if (room.getRoomNumber() == roomNumber) { //입력으로 받은 roomNumber랑 room객체의 번호가 같으면 그 room 객체를 반환하고 일치 하지 않으면 null 반환
                return room;
            }
        }
        return null;
    }
}

public class HotelReservationSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); //System.in 키보드 입력
        Hotel hotel = new Hotel(10); // 예시로 10개의 객실을 가진 호텔 생성

        while (true) {
            System.out.println("\n<호텔 예약 시스템 메뉴>");
            System.out.println("1. 사용 가능한 객실 보기");
            System.out.println("2. 예약된 객실 보기");
            System.out.println("3. 객실 예약하기");
            System.out.println("4. 예약 취소하기");
            System.out.println("5. 종료");
            System.out.print("원하는 번호를 입력하세요: ");

            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    hotel.displayAvailableRooms();
                    break;
                case 2:
                    hotel.displayReservedRooms();
                    break;
                case 3:
                    System.out.print("예약하려는 객실 번호를 입력하세요: ");
                    int roomToReserveNumber = scanner.nextInt(); // 사용자에게 정수를 입력으로 받고 변수에 저장
                    Room roomToReserve = hotel.getRoomByNumber(roomToReserveNumber);
                
                    if (roomToReserve == null || roomToReserve.isReserved()) {
                        System.out.println("해당 객실은 이미 예약되었습니다.");
                        break;
                    }
                    // if문이 거짓이면 실행
                    System.out.print("예약자 이름을 입력하세요: ");
                    String guestName = scanner.next();
                
                    System.out.print("전화번호를 입력하세요: ");
                    String phoneNumber = scanner.next();
                
                    roomToReserve.reserveRoom(guestName, phoneNumber);
                    break;
                case 4:
                    System.out.print("예약을 취소하려는 객실 번호를 입력하세요: ");
                    int roomToCancelNumber = scanner.nextInt();
                    Room roomToCancelReservation = hotel.getRoomByNumber(roomToCancelNumber);
                
                    if (roomToCancelReservation == null || !roomToCancelReservation.isReserved()) {
                        System.out.println("예약된 객실이 아니거나 존재하지 않습니다.");
                        break;
                    }
                
                    roomToCancelReservation.cancelReservation();
                    break;
                case 5:
                    System.out.println("호텔 예약 시스템을 종료합니다. 안녕히 가십시오!");
                    System.exit(0);
                    break;
                default:
                    System.out.println("유효하지 않은 선택입니다. 올바른 번호를 입력하세요.");
            }
        }
    }
}
